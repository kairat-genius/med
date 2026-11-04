import Icon from "@/shared/icon";
import { cn } from "@/shared/utils/clsx";
import type { ReviewType } from "../types/review.type";
import Modal from "@/shared/ui/modal";
import { useBodyScrollLock } from "@/shared/hooks/useBodyScrollLock";

interface ReviewModalProps {
  item: ReviewType;
  onClose: () => void;
}

const ReviewModal = ({ item, onClose }: ReviewModalProps) => {
  useBodyScrollLock(true);
  const isAttachment = Boolean(item.attachment);

  return (
    <Modal
      onClose={onClose}
      className={cn(
        "bg-background min-h-50 w-325 max-w-[95%] max-xl:pt-[40px] p-6 rounded-3xl",
        isAttachment ? "w-325" : "w-150",
      )}
    >
      <button
        type="button"
        className="absolute right-6 top-6 z-10 cursor-pointer"
        aria-label="Закрыть"
        onClick={onClose}
      >
        <Icon icon="x" className="w-5 xl:w-[24px] h-5 xl:h-[24px]" />
      </button>
      <div
        className={cn(
          "flex flex-col-reverse gap-10 max-h-[90vh]",
          isAttachment && "lg:grid lg:grid-cols-2",
        )}
      >
        {item.attachment && (
          <div className="flex gap-4">
            <div className="w-[calc(18.6441%-2.98305px)]">
              <div className="border-accent transition-colors border-2 rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://avatars.mds.yandex.net/get-altay/21525983/2a000001a07fcea5d62e7a7738a69543c8e6/L"
                  className="object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[calc(81.3559%-13.017px)]">
              <div className="border border-secondary-20 rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://avatars.mds.yandex.net/get-altay/21525983/2a000001a07fcea5d62e7a7738a69543c8e6/orig"
                  className="object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <img
              src="https://new.armed.ru/upload/iblock/12a/m5dorf901k1p2j08me1otx46ag1ivhsg/ya_avatar.jpg"
              alt="Аватар: Надежда Орлова"
              className="w-13 h-13 bg-secondary-20 rounded-full"
            />

            <div className="flex flex-col gap-2">
              <h4 className="text-20 font-semibold leading-[1.2]">
                Надежда Орлова
              </h4>
              <p className="text-secondary text-16">08.09.2026, 09:57</p>
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, starIndex) => (
              <Icon
                key={starIndex}
                icon="star"
                className={cn(
                  "h-5 xl:h-[24px] w-5 xl:w-[24px]",
                  starIndex > Math.floor(item.rating) ? "" : "text-warning",
                )}
              />
            ))}
          </div>
          <p className="text-16">
            Много лет сотрудничаем с компанией Армед, за все эти годы ни разу не
            подвели как Поставщики надежной продукции. Команда профессионалов,
            всегда все четко, в срок и качественно. Проводят бесплатные
            ознакомительные вебинары, на которых можно познакомиться не только с
            товарами Армед, но и почерпнуть кладезень полезной информации! Лично
            пользуюсь несколькими приборами, очень довольна. Отличная компания,
            всем советую приобретать именно здесь медоборудование и расходные
            материалы, не пожалеете!
          </p>
          <div className="flex flex-col gap-2 bg-secondary-20 rounded-2xl p-4">
            <p className="text-16 font-semibold">Ответ компании</p>
            <p className="text-16">
              Уважаемая Надежда! Благодарим за такой теплый отзыв и
              рекомендацию! Очень приятно, что за годы совместной работы наше
              оборудование и уровень сервиса приносят Вам только положительные
              эмоции. Отдельное спасибо за интерес к вебинарам — мы всегда рады
              делиться полезной информацией с партнерами. Всегда на связи и
              готовы помочь с новыми поставками для Вашего дела. С уважением,
              команда «АРМЕД»
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
