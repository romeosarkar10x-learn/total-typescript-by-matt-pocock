function getHomepageFeatureFlags<HomepageFlagsType>(
    config: { rawConfig: { featureFlags: { homepage: HomepageFlagsType } } },
    override: (flags: HomepageFlagsType) => HomepageFlagsType,
) {
    return override(config.rawConfig.featureFlags.homepage);
}
