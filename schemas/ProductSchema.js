import { z } from "zod";

export const ProductSchema = z.object({
    name: z.string()
        .min(3,"The title must have at least 3 characters"),

    slug: z.string()
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    description: z.string()
        .min(30, "The description must have at least 30 characters"),
    price: z.number()
        .min(1),
    texture: z.string()
        .min(3),
    weight: z.number({
        invalid_type_error: "Weight must be a number !"
    })
        .min(1),
    size: z.string()
        .min(1),
    categoryId: z.number({
        invalid_type_error: "Please select a category"
    })

});
