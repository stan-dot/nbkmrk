export type ProviderDictionary = Record<string, Provider>

export type Provider = {
    urlPattern: string;
    completeProvider: boolean;
    rules: string[];
    referralMarketing: string[];
    rawRules: string[];
    exceptions: string[];
    redirections: string[];
    forceRedirection: boolean;
}

