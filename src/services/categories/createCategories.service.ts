import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

export const createCategoriesServices = async (
  name: string
): Promise<ICategoryRequest> => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const categories = categoriesRepository.create({
    name,
  });
  await categoriesRepository.save(categories);

  return categories;
};
