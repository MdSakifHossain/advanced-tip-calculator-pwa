export const injectFavicon = (faviconLinkTag, faviconProps) => {
    // Check if favicon link tag exists
    if (faviconLinkTag) {
        // Favicon link tag exists, update
        faviconLinkTag.rel = faviconProps.rel;
        faviconLinkTag.type = faviconProps.type;
        faviconLinkTag.href = faviconProps.href;
        faviconLinkTag.sizes = faviconProps.sizes;
    } else {
        // Favicon link tag doesn't exist, create and add
        const newFaviconLinkTag = document.createElement("link");
        newFaviconLinkTag.rel = faviconProps.rel;
        newFaviconLinkTag.type = faviconProps.type;
        newFaviconLinkTag.href = faviconProps.href;
        newFaviconLinkTag.sizes = faviconProps.sizes;
        document.head.appendChild(newFaviconLinkTag);
    }
};

export const injectIosStatusBar = (iosStatusBar, theme_color) => {
    // Check if meta tag exists
    if (iosStatusBar) {
        // Meta tag exists, update content
        iosStatusBar.content = theme_color;
    } else {
        // Meta tag doesn't exist, create and add
        const newIosStatusBarMetaTag = document.createElement("meta");
        newIosStatusBarMetaTag.name = "apple-mobile-web-app-status-bar-style";
        newIosStatusBarMetaTag.content = theme_color;
        document.head.appendChild(newIosStatusBarMetaTag);
    }
};

export const injectMetaThemeTag = (metaThemeTag, themeColor) => {
    // Set the theme color
    if (metaThemeTag) {
        metaThemeTag.setAttribute("content", themeColor);
    } else {
        // If the meta tag doesn't exist, create it
        const newMetaThemeTag = document.createElement("meta");
        newMetaThemeTag.name = "theme-color";
        newMetaThemeTag.content = themeColor;
        document.head.appendChild(newMetaThemeTag);
    }
};

export const injectTitle = (titleTag, newTitle) => {
    if (titleTag) {
        // Title tag exists, update content
        titleTag.textContent = newTitle;
    } else {
        // Title tag doesn't exist, create and then add
        const newTitleTag = document.createElement("title");
        newTitleTag.textContent = newTitle;
        document.head.appendChild(newTitleTag);
    }
};

