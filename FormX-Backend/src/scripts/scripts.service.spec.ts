import { ScriptsService } from './scripts.service';

describe('ScriptsService.executeScript', () => {
  let service: ScriptsService;

  beforeEach(() => {
    service = new ScriptsService({} as never);
  });

  it('returns the script result and exposes context and utils', async () => {
    const res = await service.executeScript(
      `return { ok: utils.validateEmail(context.formData.email), url: utils.validateUrl('https://a.io'), bad: utils.validateUrl('nope') };`,
      { event: 'validate', formData: { email: 'a@b.co' } },
    );
    expect(res.success).toBe(true);
    expect(res.result).toEqual({ ok: true, url: true, bad: false });
  });

  it('does not let the script reach the host process', async () => {
    const res = await service.executeScript(
      `return this.constructor.constructor('return process')();`,
      { event: 'validate' },
    );
    // The isolate has its own realm with no process object
    expect(res.success).toBe(false);
    expect(res.error).toMatch(/process is not defined/);
  });

  it('stops scripts that exceed the memory limit', async () => {
    const res = await service.executeScript(
      `const a = []; while (true) { a.push(new Array(1e6).fill(1)); }`,
      { event: 'validate' },
    );
    expect(res.success).toBe(false);
  }, 15000);

  it('times out async code that spins forever', async () => {
    const res = await service.executeScript(`await 0; while (true) {}`, {
      event: 'validate',
    });
    expect(res.success).toBe(false);
    expect(res.error).toMatch(/timed out/i);
  }, 15000);

  it('awaits a slow async helper instead of racing a fixed delay', async () => {
    const slow = () =>
      new Promise((resolve) => setTimeout(() => resolve([{ id: 1 }]), 300));
    const res = await service.executeScript(
      `const rows = await context.queryForm('f1'); return { count: rows.length };`,
      { event: 'validate', queryForm: slow as never },
    );
    expect(res.success).toBe(true);
    expect(res.result).toEqual({ count: 1 });
  });

  it('reports a thrown error as a failure', async () => {
    const res = await service.executeScript(`throw new Error('nope');`, {
      event: 'validate',
    });
    expect(res).toMatchObject({ success: false, error: 'nope' });
  });

  it('copies Date values into the isolate', async () => {
    const res = await service.executeScript(
      `return context.existingSubmissions[0].createdAt instanceof Date;`,
      {
        event: 'validate',
        existingSubmissions: [{ id: 'x', createdAt: new Date() }],
      },
    );
    expect(res.result).toBe(true);
  });
});
