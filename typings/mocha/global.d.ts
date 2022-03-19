declare global {
  namespace Mocha {
    interface Context {
      inspect: typeof inspect
      pf: typeof pf
      sandbox: typeof sandbox
    }

    interface RunnerOptions {
      reporterOptions?: any
    }
  }
}

export {}
