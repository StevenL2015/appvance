setVariablesIfNeeded("{ds}/dpl.csv", "HashDPL", 0);
setFailOnValidations(true);
prepareDomain($baseURL);
prepareDomain("https://demosite.appvance.net/");
setShadowDOM(true);
setFindOnlyVisible(true);
setFindOnlyEnabled(true);
selectMainFrame();
navigateTo($baseURL);
click(submit("Search"));
click(link("Categories"));
click(link("Ruby on Rails Ringer T-Shirt[1]"));
