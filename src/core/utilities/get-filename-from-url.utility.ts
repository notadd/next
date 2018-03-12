import * as querystring from "querystring";
import * as urlJoin from "url-join";
import { getPaths } from "./get-paths.utility";
import { parse } from "url";

export function getFilenameFromUrl(pubPath, compiler, url): string {
    const { outputPath, publicPath } = getPaths(pubPath, compiler, url);
    const localPrefix = parse(publicPath || '/', false, true);
    const urlObject = parse(url);
    let filename;
    if (localPrefix.hostname !== null && urlObject.hostname !== null &&
        localPrefix.hostname !== urlObject.hostname) {
        return "";
    }
    if (publicPath && localPrefix.hostname === urlObject.hostname &&
        url.indexOf(publicPath) !== 0) {
        return "";
    }
    if (urlObject
        && urlObject.pathname
        && localPrefix.pathname
        && urlObject.pathname.indexOf(localPrefix.pathname) === 0) {
        filename = urlObject.pathname.substr(localPrefix.pathname.length);
    }

    if (!urlObject.hostname && localPrefix.hostname &&
        url.indexOf(localPrefix.path) !== 0) {
        return "";
    }

    let uri = outputPath;

    if (filename) {
        uri = urlJoin((outputPath || ''), filename);

        if (!uri.startsWith('/')) {
            uri = `/${uri}`;
        }
    }

    return querystring.unescape(uri);
}
