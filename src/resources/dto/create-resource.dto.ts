export class CreateResourceDto {
  name: string;
  description?: string;
  type: string;
  totalQuantity: number;
  availableQuantity: number;
  reusable: boolean;
  categoryId: string;
}