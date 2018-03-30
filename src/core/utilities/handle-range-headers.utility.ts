import * as parseRange from "range-parser";

export function handleRangeHeaders(content, req, res) {
    res.setHeader("Accept-Ranges", "bytes");
    if (req.headers.range) {
        const ranges = parseRange(content.length, req.headers.range);
        if (ranges === -1) {
            res.setHeader("Content-Range", `bytes */${content.length}`);
            res.statusCode = 416;
        }
        if (ranges !== -2 && ranges.length === 1) {
            const { length } = content;
            res.statusCode = 206;
            res.setHeader(
                "Content-Range",
                `bytes ${ranges[ 0 ].start}-${ranges[ 0 ].end}/${length}`
            );
            content = content.slice(ranges[ 0 ].start, ranges[ 0 ].end + 1);
        }
    }

    return content;
}
