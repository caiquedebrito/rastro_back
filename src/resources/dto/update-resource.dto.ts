export class UpdateResourceDto {
  name?: string;
  description?: string;
  type?: string;
  totalQuantity?: number;
  availableQuantity?: number;
  reusable?: boolean;
  categoryId?: string;
}