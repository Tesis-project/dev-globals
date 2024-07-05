"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagination_meta = pagination_meta;
function pagination_meta(page, limit, total) {
    const lastPage = Math.ceil(total / limit);
    const hasPrevious = page > 1;
    const hasNext = page < lastPage;
    return {
        page,
        limit,
        total,
        lastPage,
        hasPrevious,
        hasNext,
    };
}
//# sourceMappingURL=pagination.meta.js.map