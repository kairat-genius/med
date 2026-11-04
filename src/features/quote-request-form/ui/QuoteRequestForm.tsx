"use client";
import { Button } from "@/shared/ui/action";
import Icon from "@/shared/icon";
import FormField from "@/shared/ui/form-field";
import Checkbox from "@/shared/ui/checkbox";
import { useForm } from "react-hook-form";
import { QuoteRequestType } from "../types/quote-request.type";
import { useQuoteRequest } from "../model/useRegister";
import { emailValidation } from "@/shared/validation";

const QuoteRequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitted },
    setError,
  } = useForm<QuoteRequestType>({
    mode: "onChange",
  });

  const { onSubmit } = useQuoteRequest(setError);
  return (
    <section className="container mb-20">
      <article className="p-6 grid gap-10 md:grid-cols-[1fr_1fr] bg-background rounded-3xl">
        <div className="flex flex-col">
          <h2 className="uppercase text-28 mb-4 text-accent leading-[1.2] font-semibold">
            Не&nbsp;знаете, с&nbsp;чего начать?
          </h2>
          <p className="text-18 mb-10 text-secondary">
            Опишите вашу задачу, а&nbsp;мы&nbsp;подготовим индивидуальное
            коммерческое предложение за&nbsp;15&nbsp;минут в&nbsp;рабочее время
          </p>
          <form
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)(e);
            }}
          >
            <FormField error={errors.username?.message}>
              <label className="relative">
                <p className="bg-background top-0 left-4 -translate-y-1/2 absolute px-1 text-[12px] truncate font-semibold leading-none max-w-[calc(100%-var(--spacing-6)*2)]">
                  Имя*
                </p>
                <input
                  type="text"
                  className="h-13 border border-secondary-20 rounded-2xl w-full pl-4 outline-none pr-[calc(var(--spacing-6)+24px)]"
                  placeholder="Как вас зовут?"
                  {...register("username", {
                    pattern: {
                      value: /^[а-яА-ЯёЁa-zA-Z0-9\s]+$/,
                      message: "Используйте только буквы и цифры",
                    },
                  })}
                />
              </label>
            </FormField>
            <FormField error={errors.email?.message}>
              <label className="relative">
                <p className="bg-background top-0 left-4 -translate-y-1/2 absolute px-1 text-[12px] truncate font-semibold leading-none max-w-[calc(100%-var(--spacing-6)*2)]">
                  E-mail*
                </p>
                <input
                  type="email"
                  className="h-13 border border-secondary-20 rounded-2xl w-full pl-4 outline-none pr-[calc(var(--spacing-6)+24px)]"
                  placeholder="Укажите вашу почту"
                  {...register("email", emailValidation)}
                />
              </label>
            </FormField>
            <FormField error={errors.organization?.message}>
              <label className="relative">
                <p className="bg-background top-0 left-4 -translate-y-1/2 absolute px-1 text-[12px] truncate font-semibold leading-none max-w-[calc(100%-var(--spacing-6)*2)]">
                  Название организации
                </p>
                <input
                  type="text"
                  className="h-13 border border-secondary-20 rounded-2xl w-full pl-4 outline-none pr-[calc(var(--spacing-6)+24px)]"
                  placeholder="Например, ООО&nbsp;«Ромашка»"
                  {...register("organization")}
                />
              </label>
            </FormField>
            <FormField error={errors.comment?.message}>
              <label className="relative">
                <p className="bg-background top-0 left-4 -translate-y-1/2 absolute px-1 text-[12px] truncate font-semibold leading-none max-w-[calc(100%-var(--spacing-6)*2)]">
                  Комментарий
                </p>
                <textarea
                  rows={5}
                  placeholder="Расскажите, что&nbsp;именно нужно и&nbsp;для&nbsp;чего. Укажите оборудование и&nbsp;цели, чтобы&nbsp;мы&nbsp;подготовили оптимальное предложение"
                  className="border border-secondary-20 rounded-2xl w-full pl-4 outline-none pr-[calc(var(--spacing-6)+24px)] py-4 resize-none overflow-hidden block select-text"
                  {...register("comment")}
                />
              </label>
            </FormField>
            <FormField error={errors.privacy?.message}>
              <Checkbox>
                <p className="text-[14px]">
                  Нажимая «Отправить заявку», я соглашаюсь с{" "}
                  <a
                    href="/privacy-personal"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link checkbox__link"
                  >
                    {" "}
                    Политикой конфиденциальности{" "}
                  </a>{" "}
                  и даю согласие на обработку моих данных*{" "}
                </p>
              </Checkbox>
            </FormField>
            <div className="w-full mb-2">
              <p className="text text-[12px] text-secondary ml-1">
                {" "}
                Защиту от роботов обеспечивает Яндекс SmartCaptcha{" "}
              </p>
            </div>
            <Button
              type="submit"
              className="w-auto max-w-fit"
              disabled={isSubmitting || (isSubmitted && !isValid)}
            >
              <span className="text-16 font-semibold">Отправить заявку</span>
              <Icon
                icon="arrow-up-right"
                className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
              />
            </Button>
          </form>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://www.armed.ru/images/common/banners/rehab-photo-feedback.png"
            alt="Фото медицинского кабинета"
            className="w-full h-full object-cover"
          />
        </div>
      </article>
    </section>
  );
};

export default QuoteRequestForm;
