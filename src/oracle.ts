export * from './oracle/types.js';
export {
  MODEL_CONFIGS,
  DEFAULT_MODEL,
  PRO_MODELS,
  DEFAULT_SYSTEM_PROMPT,
  TOKENIZER_OPTIONS,
} from './oracle/config.js';
export { readFiles, createFileSections } from './oracle/files.js';
export { buildPrompt, buildRequestBody, renderPromptMarkdown } from './oracle/request.js';
export { estimateRequestTokens } from './oracle/tokenEstimate.js';
export { formatUSD, formatNumber, formatElapsed } from './oracle/format.js';
export { formatFileSection } from './oracle/markdown.js';
export { getFileTokenStats, printFileTokenStats } from './oracle/tokenStats.js';
export {
  OracleResponseError,
  OracleTransportError,
  OracleUserError,
  FileValidationError,
  BrowserAutomationError,
  PromptValidationError,
  describeTransportError,
  extractResponseMetadata,
  asOracleUserError,
  toTransportError,
} from './oracle/errors.js';
export { createDefaultClientFactory } from './oracle/client.js';
export { runOracle, extractTextOutput } from './oracle/run.js';
export { resolveGeminiModelId } from './oracle/gemini.js';

// ============================================================================
// Browser Mode Exports (for oracle-acp and library consumers)
// ============================================================================

// Browser execution
export type {
  BrowserAutomationConfig,
  BrowserRunOptions,
  BrowserRunResult,
} from './browserMode.js';
export {
  runBrowserMode,
  CHATGPT_URL,
  DEFAULT_MODEL_STRATEGY,
  DEFAULT_MODEL_TARGET,
  parseDuration,
  normalizeChatgptUrl,
  isTemporaryChatUrl,
} from './browserMode.js';

// Browser session execution
export { runBrowserSessionExecution } from './browser/sessionRunner.js';
export type { BrowserExecutionResult, BrowserSessionRunnerDeps } from './browser/sessionRunner.js';

// Browser prompt assembly
export { assembleBrowserPrompt, isMediaFile } from './browser/prompt.js';
export type { BrowserPromptArtifacts } from './browser/prompt.js';

// Browser types
export type {
  BrowserAttachment,
  BrowserModelStrategy,
  CookieParam,
  BrowserLogger,
} from './browser/types.js';

// Browser config helpers
export {
  buildBrowserConfig,
  normalizeChatGptModelForBrowser,
  mapModelToBrowserLabel,
  resolveBrowserModelLabel,
} from './cli/browserConfig.js';
export type { BrowserFlagOptions } from './cli/browserConfig.js';

// Session store types
export type {
  BrowserSessionConfig,
  BrowserRuntimeMetadata,
} from './sessionStore.js';

// ============================================================================
// Gemini Web Exports (for oracle-acp)
// ============================================================================

export { createGeminiWebExecutor } from './gemini-web/index.js';
export type { GeminiWebOptions, GeminiWebResponse } from './gemini-web/index.js';
