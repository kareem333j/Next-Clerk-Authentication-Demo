export { }; // بيخلي الملف يتعامل كموديول مش كاسكريبت عادي

export type Roles = "admin" | "moderator";

declare global { // هضيف تعريف جديد أو هوسّع تعريف موجود في الـسكوب العالمي للمشروع
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        }
    }
}