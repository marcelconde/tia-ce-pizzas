import type {
  Product,
  ProductSize,
  ProductImage,
  ProductIngredient,
  Category,
  Ingredient,
} from '@/generated/prisma/client'

export type ProductWithRelations = Product & {
  sizes: ProductSize[]
  images: ProductImage[]
  category: Category
  recipe?: (ProductIngredient & {
    ingredient: Ingredient
  })[]
}

export type CategoryWithProducts = Category & {
  products: (Product & {
    sizes: ProductSize[]
    images: ProductImage[]
  })[]
}

export type ProductSizeWithProduct = ProductSize & {
  product: Product & {
    images: ProductImage[]
  }
}
