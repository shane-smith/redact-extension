# redact-extension

Firefox extension to remove personally identifiable text from websites for use of screenshots.

![Demo](./preview.gif)

## Installation

To install an unsigned extension, you must use a [different version of Firefox](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox#w_what-are-my-options-if-i-want-to-use-an-unsigned-add-on-advanced-users).

1. Download `extension.xpi`
2. Visit `about:config` in Firefox and set `xpinstall.signatures.required` to false
3. Visit `about:addons` in Firefox and under cog wheel button, choose "Install Add-on From File..." and select the XPI file

If you are not using one of the Firefox versions mentioned in the link above, you will see an error:
- "This add-on could not be installed because it has not been verified."