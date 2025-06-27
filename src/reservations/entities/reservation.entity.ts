import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { BaseEntity } from '@/common/entity/base.entity';
import { User } from '@/users/entities/user.entity';
import { SimilarGroup } from '@/similar-groups/entities/similar-groups.entity';
import { ReservationCategory } from '@/common/enums/reservation-category';

@Entity({ name: 'reservations' })
export class Reservation extends BaseEntity {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'enum', enum: ReservationCategory })
  category: ReservationCategory;

  @Column({ name: 'reservation_datetime', type: 'timestamp' })
  reservationDatetime: Date;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ name: 'link_url', type: 'varchar', nullable: true })
  linkUrl: string | null;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'host_id' })
  host: User;

  @ManyToOne(() => SimilarGroup)
  @JoinColumn({ name: 'similar_group_id' })
  similarGroup: SimilarGroup;

  // 폴리모픽 관계인 images는 필드로 둘 수 없음
}
