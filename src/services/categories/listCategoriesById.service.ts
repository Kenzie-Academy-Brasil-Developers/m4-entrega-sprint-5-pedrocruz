import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/app.errors";

export const listCategoriesByIdServices = async (
  categoryId: string
): Promise<object> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      properties: {
        address: true,
        category: true,
      },
    },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};
