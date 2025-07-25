import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@/common/entity/base.entity';
import { ImageParentType } from '@/common/enums/image-parent-type';

@Entity({ name: 'images' })
export class Image extends BaseEntity {
  @Column({ name: 's3_file_path' })
  s3FilePath: string;

  @Column({
    name: 'parent_type',
    type: 'enum',
    enum: ImageParentType,
  })
  parentType: ImageParentType;

  @Column({ name: 'parent_id' })
  parentId: number;
}
