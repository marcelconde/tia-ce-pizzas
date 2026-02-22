import { PrismaClient } from '../src/generated/prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Iniciando seed do banco de dados...')

  // ========================================
  // 1. ADMIN USER
  // ========================================
  console.log('Criando usuario admin...')

  const passwordHash = await bcrypt.hash('admin123', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@tiacepizzas.com' },
    update: {},
    create: {
      email: 'admin@tiacepizzas.com',
      name: 'Administrador',
      passwordHash,
      role: 'ADMIN',
      isActive: true,
    },
  })

  console.log(`  Admin criado: ${admin.email}`)

  // ========================================
  // 2. CATEGORIES
  // ========================================
  console.log('Criando categorias...')

  const categoriesData = [
    { name: 'Tradicionais', slug: 'tradicionais', type: 'PIZZA' as const, sortOrder: 1, description: 'Nossas pizzas tradicionais com os sabores classicos que voce ama' },
    { name: 'Especiais', slug: 'especiais', type: 'PIZZA' as const, sortOrder: 2, description: 'Pizzas com combinacoes especiais e ingredientes selecionados' },
    { name: 'Premium', slug: 'premium', type: 'PIZZA' as const, sortOrder: 3, description: 'Pizzas com ingredientes nobres e sofisticados' },
    { name: 'Doces', slug: 'doces', type: 'PIZZA' as const, sortOrder: 4, description: 'Pizzas doces para adocar seu dia' },
    { name: 'Bebidas', slug: 'bebidas', type: 'BEVERAGE' as const, sortOrder: 5, description: 'Refrigerantes, sucos e outras bebidas' },
    { name: 'Acompanhamentos', slug: 'acompanhamentos', type: 'SIDE' as const, sortOrder: 6, description: 'Complementos perfeitos para sua pizza' },
  ]

  const categories: Record<string, string> = {}

  for (const cat of categoriesData) {
    const created = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    })
    categories[cat.slug] = created.id
    console.log(`  Categoria criada: ${created.name}`)
  }

  // ========================================
  // 3. PRODUCTS (Pizzas with sizes)
  // ========================================
  console.log('Criando produtos...')

  type ProductSeed = {
    name: string
    slug: string
    description: string
    categorySlug: string
    isHalfHalf: boolean
    sizes: { size: 'PEQUENA' | 'MEDIA' | 'GRANDE'; price: number }[]
  }

  const productsData: ProductSeed[] = [
    // --- Tradicionais ---
    {
      name: 'Calabresa',
      slug: 'calabresa',
      description: 'Molho de tomate, mussarela, calabresa fatiada, cebola e oregano',
      categorySlug: 'tradicionais',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 29.90 },
        { size: 'MEDIA', price: 39.90 },
        { size: 'GRANDE', price: 49.90 },
      ],
    },
    {
      name: 'Margherita',
      slug: 'margherita',
      description: 'Molho de tomate, mussarela, tomate fatiado, manjericao fresco e oregano',
      categorySlug: 'tradicionais',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 29.90 },
        { size: 'MEDIA', price: 39.90 },
        { size: 'GRANDE', price: 49.90 },
      ],
    },
    {
      name: 'Portuguesa',
      slug: 'portuguesa',
      description: 'Molho de tomate, mussarela, presunto, ovo cozido, cebola, azeitona e oregano',
      categorySlug: 'tradicionais',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 32.90 },
        { size: 'MEDIA', price: 42.90 },
        { size: 'GRANDE', price: 54.90 },
      ],
    },
    {
      name: 'Mussarela',
      slug: 'mussarela',
      description: 'Molho de tomate, mussarela generosa e oregano',
      categorySlug: 'tradicionais',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 29.90 },
        { size: 'MEDIA', price: 38.90 },
        { size: 'GRANDE', price: 48.90 },
      ],
    },
    {
      name: 'Frango c/ Catupiry',
      slug: 'frango-catupiry',
      description: 'Molho de tomate, mussarela, frango desfiado e catupiry cremoso',
      categorySlug: 'tradicionais',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 32.90 },
        { size: 'MEDIA', price: 42.90 },
        { size: 'GRANDE', price: 54.90 },
      ],
    },
    {
      name: 'Napolitana',
      slug: 'napolitana',
      description: 'Molho de tomate, mussarela, tomate, parmesao e oregano',
      categorySlug: 'tradicionais',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 30.90 },
        { size: 'MEDIA', price: 40.90 },
        { size: 'GRANDE', price: 50.90 },
      ],
    },

    // --- Especiais ---
    {
      name: 'Quatro Queijos',
      slug: 'quatro-queijos',
      description: 'Molho de tomate, mussarela, provolone, gorgonzola e parmesao',
      categorySlug: 'especiais',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 34.90 },
        { size: 'MEDIA', price: 46.90 },
        { size: 'GRANDE', price: 58.90 },
      ],
    },
    {
      name: 'Pepperoni',
      slug: 'pepperoni',
      description: 'Molho de tomate, mussarela e pepperoni artesanal em fatias generosas',
      categorySlug: 'especiais',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 34.90 },
        { size: 'MEDIA', price: 46.90 },
        { size: 'GRANDE', price: 58.90 },
      ],
    },
    {
      name: 'Baiana',
      slug: 'baiana',
      description: 'Molho de tomate, mussarela, calabresa moida, cebola, pimenta e ovo cozido',
      categorySlug: 'especiais',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 33.90 },
        { size: 'MEDIA', price: 44.90 },
        { size: 'GRANDE', price: 56.90 },
      ],
    },
    {
      name: 'Lombo c/ Catupiry',
      slug: 'lombo-catupiry',
      description: 'Molho de tomate, mussarela, lombo canadense e catupiry cremoso',
      categorySlug: 'especiais',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 35.90 },
        { size: 'MEDIA', price: 47.90 },
        { size: 'GRANDE', price: 59.90 },
      ],
    },

    // --- Premium ---
    {
      name: 'Camarao',
      slug: 'camarao',
      description: 'Molho de tomate, mussarela, camarao refogado no alho, catupiry e cebolinha',
      categorySlug: 'premium',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 39.90 },
        { size: 'MEDIA', price: 54.90 },
        { size: 'GRANDE', price: 69.90 },
      ],
    },
    {
      name: 'Salmao',
      slug: 'salmao',
      description: 'Molho de tomate, mussarela, salmao defumado, cream cheese e alcaparras',
      categorySlug: 'premium',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 39.90 },
        { size: 'MEDIA', price: 54.90 },
        { size: 'GRANDE', price: 69.90 },
      ],
    },
    {
      name: 'File Mignon',
      slug: 'file-mignon',
      description: 'Molho de tomate, mussarela, file mignon em tiras, bacon crocante e catupiry',
      categorySlug: 'premium',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 38.90 },
        { size: 'MEDIA', price: 52.90 },
        { size: 'GRANDE', price: 67.90 },
      ],
    },

    // --- Doces ---
    {
      name: 'Chocolate',
      slug: 'chocolate',
      description: 'Chocolate ao leite derretido com granulado',
      categorySlug: 'doces',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 27.90 },
        { size: 'MEDIA', price: 36.90 },
        { size: 'GRANDE', price: 46.90 },
      ],
    },
    {
      name: 'Romeu e Julieta',
      slug: 'romeu-e-julieta',
      description: 'Mussarela com goiabada cremosa derretida',
      categorySlug: 'doces',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 28.90 },
        { size: 'MEDIA', price: 37.90 },
        { size: 'GRANDE', price: 47.90 },
      ],
    },
    {
      name: 'Banana c/ Canela',
      slug: 'banana-canela',
      description: 'Banana fatiada, canela, acucar e leite condensado',
      categorySlug: 'doces',
      isHalfHalf: true,
      sizes: [
        { size: 'PEQUENA', price: 27.90 },
        { size: 'MEDIA', price: 36.90 },
        { size: 'GRANDE', price: 46.90 },
      ],
    },
  ]

  for (const prod of productsData) {
    const categoryId = categories[prod.categorySlug]

    const product = await prisma.product.upsert({
      where: { slug: prod.slug },
      update: {},
      create: {
        name: prod.name,
        slug: prod.slug,
        description: prod.description,
        categoryId,
        isHalfHalf: prod.isHalfHalf,
        isActive: true,
      },
    })

    // Create sizes for this product
    for (const sizeData of prod.sizes) {
      await prisma.productSize.upsert({
        where: {
          productId_size: {
            productId: product.id,
            size: sizeData.size,
          },
        },
        update: { price: sizeData.price },
        create: {
          productId: product.id,
          size: sizeData.size,
          price: sizeData.price,
          isActive: true,
        },
      })
    }

    console.log(`  Produto criado: ${product.name}`)
  }

  // ========================================
  // 4. INGREDIENTS
  // ========================================
  console.log('Criando ingredientes...')

  const ingredientsData = [
    { name: 'Massa de Pizza', unit: 'GRAMAS' as const, costPerUnit: 0.005, currentStock: 50000, minimumStock: 10000 },
    { name: 'Molho de Tomate', unit: 'GRAMAS' as const, costPerUnit: 0.008, currentStock: 20000, minimumStock: 5000 },
    { name: 'Mussarela', unit: 'GRAMAS' as const, costPerUnit: 0.045, currentStock: 15000, minimumStock: 3000 },
    { name: 'Calabresa', unit: 'GRAMAS' as const, costPerUnit: 0.035, currentStock: 10000, minimumStock: 2000 },
    { name: 'Presunto', unit: 'GRAMAS' as const, costPerUnit: 0.040, currentStock: 8000, minimumStock: 2000 },
    { name: 'Frango Desfiado', unit: 'GRAMAS' as const, costPerUnit: 0.030, currentStock: 8000, minimumStock: 2000 },
    { name: 'Catupiry', unit: 'GRAMAS' as const, costPerUnit: 0.060, currentStock: 5000, minimumStock: 1000 },
    { name: 'Cebola', unit: 'GRAMAS' as const, costPerUnit: 0.005, currentStock: 10000, minimumStock: 2000 },
    { name: 'Tomate', unit: 'GRAMAS' as const, costPerUnit: 0.008, currentStock: 8000, minimumStock: 2000 },
    { name: 'Azeitona', unit: 'GRAMAS' as const, costPerUnit: 0.080, currentStock: 3000, minimumStock: 500 },
    { name: 'Ovo Cozido', unit: 'UNIDADE' as const, costPerUnit: 0.50, currentStock: 200, minimumStock: 50 },
    { name: 'Oregano', unit: 'GRAMAS' as const, costPerUnit: 0.100, currentStock: 2000, minimumStock: 500 },
    { name: 'Manjericao', unit: 'GRAMAS' as const, costPerUnit: 0.150, currentStock: 1000, minimumStock: 200 },
    { name: 'Pepperoni', unit: 'GRAMAS' as const, costPerUnit: 0.070, currentStock: 5000, minimumStock: 1000 },
    { name: 'Chocolate ao Leite', unit: 'GRAMAS' as const, costPerUnit: 0.050, currentStock: 3000, minimumStock: 500 },
    { name: 'Goiabada', unit: 'GRAMAS' as const, costPerUnit: 0.030, currentStock: 3000, minimumStock: 500 },
    { name: 'Banana', unit: 'UNIDADE' as const, costPerUnit: 0.30, currentStock: 200, minimumStock: 50 },
    { name: 'Canela', unit: 'GRAMAS' as const, costPerUnit: 0.120, currentStock: 500, minimumStock: 100 },
    { name: 'Camarao', unit: 'GRAMAS' as const, costPerUnit: 0.120, currentStock: 3000, minimumStock: 500 },
    { name: 'Lombo', unit: 'GRAMAS' as const, costPerUnit: 0.050, currentStock: 5000, minimumStock: 1000 },
  ]

  for (const ing of ingredientsData) {
    const created = await prisma.ingredient.upsert({
      where: { name: ing.name },
      update: {},
      create: {
        name: ing.name,
        unit: ing.unit,
        costPerUnit: ing.costPerUnit,
        currentStock: ing.currentStock,
        minimumStock: ing.minimumStock,
        isActive: true,
      },
    })
    console.log(`  Ingrediente criado: ${created.name}`)
  }

  // ========================================
  // 5. DELIVERY ZONES
  // ========================================
  console.log('Criando zonas de entrega...')

  const deliveryZonesData = [
    {
      name: 'Centro',
      neighborhoods: ['Centro', 'Centro Historico'],
      fee: 5.00,
      estimatedMinutes: 25,
      sortOrder: 1,
    },
    {
      name: 'Zona Norte',
      neighborhoods: ['Bairro A', 'Bairro B', 'Bairro C'],
      fee: 8.00,
      estimatedMinutes: 35,
      sortOrder: 2,
    },
    {
      name: 'Zona Sul',
      neighborhoods: ['Bairro D', 'Bairro E'],
      fee: 10.00,
      estimatedMinutes: 45,
      sortOrder: 3,
    },
    {
      name: 'Zona Leste',
      neighborhoods: ['Bairro F', 'Bairro G'],
      fee: 12.00,
      estimatedMinutes: 50,
      sortOrder: 4,
    },
  ]

  // Use a transaction for delivery zones since they don't have unique constraints for upsert
  await prisma.$transaction(async (tx) => {
    // Delete existing delivery zones to avoid duplicates on re-seed
    await tx.deliveryZone.deleteMany()

    for (const zone of deliveryZonesData) {
      const created = await tx.deliveryZone.create({
        data: {
          name: zone.name,
          neighborhoods: zone.neighborhoods,
          fee: zone.fee,
          estimatedMinutes: zone.estimatedMinutes,
          isActive: true,
          sortOrder: zone.sortOrder,
        },
      })
      console.log(`  Zona de entrega criada: ${created.name}`)
    }
  })

  // ========================================
  // 6. DEFAULT SETTINGS
  // ========================================
  console.log('Criando configuracoes padroes...')

  const operatingHours = {
    segunda: { open: false, start: '', end: '' },
    terca: { open: true, start: '18:00', end: '23:30' },
    quarta: { open: true, start: '18:00', end: '23:30' },
    quinta: { open: true, start: '18:00', end: '23:30' },
    sexta: { open: true, start: '18:00', end: '00:00' },
    sabado: { open: true, start: '18:00', end: '00:00' },
    domingo: { open: true, start: '18:00', end: '23:00' },
  }

  const settingsData = [
    { key: 'store_name', value: 'Tia Ce Pizzas', type: 'string' },
    { key: 'store_phone', value: '(00) 0000-0000', type: 'string' },
    { key: 'store_whatsapp', value: '(00) 00000-0000', type: 'string' },
    { key: 'minimum_order_value', value: '25', type: 'number' },
    { key: 'average_preparation_minutes', value: '30', type: 'number' },
    { key: 'operating_hours', value: JSON.stringify(operatingHours), type: 'json' },
  ]

  for (const setting of settingsData) {
    const created = await prisma.setting.upsert({
      where: { key: setting.key },
      update: { value: setting.value, type: setting.type },
      create: {
        key: setting.key,
        value: setting.value,
        type: setting.type,
      },
    })
    console.log(`  Configuracao criada: ${created.key} = ${created.value.substring(0, 50)}${created.value.length > 50 ? '...' : ''}`)
  }

  console.log('\nSeed concluido com sucesso!')
  console.log('---')
  console.log('Admin: admin@tiacepizzas.com / admin123')
  console.log(`Categorias: ${categoriesData.length}`)
  console.log(`Produtos: ${productsData.length}`)
  console.log(`Ingredientes: ${ingredientsData.length}`)
  console.log(`Zonas de entrega: ${deliveryZonesData.length}`)
  console.log(`Configuracoes: ${settingsData.length}`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('Erro ao executar seed:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
