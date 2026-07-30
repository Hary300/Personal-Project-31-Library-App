import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
];

export const createBookSchema = z.object({
  // Required fields
  title: z.string().min(1, 'Title is required'),

  isbn: z.string().min(1, 'ISBN is required'),

  categoryId: z.coerce
    .number({ message: 'Category must be selected' })
    .min(1, 'Category is required'),

  // Optional fields
  authorId: z.coerce.number().optional().nullable(),

  authorName: z.string().optional().nullable(),

  description: z.string().optional().nullable(),

  publishedYear: z.coerce
    .number()
    .int('Year must be an integer')
    .min(1000, 'Invalid year')
    .max(new Date().getFullYear(), 'Year cannot be in the future')
    .optional()
    .nullable(),

  totalCopies: z.coerce
    .number()
    .int()
    .min(0, 'Total copies cannot be negative')
    .optional()
    .nullable(),

  availableCopies: z.coerce
    .number()
    .int()
    .min(0, 'Available copies cannot be negative')
    .optional()
    .nullable(),

  // Cover Image Validation
  coverImage: z
    .custom<File>()
    .optional()
    .nullable()
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      'Max image size is 5MB'
    )
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file?.type ?? ''),
      'Image format must be JPEG, PNG, GIF, or WebP'
    ),
});

export type CreateBookInput = z.infer<typeof createBookSchema>;
