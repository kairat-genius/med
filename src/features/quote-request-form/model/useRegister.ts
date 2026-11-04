import type { SubmitHandler, UseFormSetError } from "react-hook-form";
import type { QuoteRequestType } from "../types/quote-request.type";
import { postQuoteRequest } from "../api/postQuoteRequest";
import { useToast } from "@/shared/toast";

import { useServerFieldErrors } from "@/shared/hooks/useServerFieldErrors";

type UseQuoteRequestReturn = {
  onSubmit: SubmitHandler<QuoteRequestType>;
};

export const useQuoteRequest = (
  setError: UseFormSetError<QuoteRequestType>,
): UseQuoteRequestReturn => {
  const { handleServerError } = useServerFieldErrors<QuoteRequestType>();
  const { showToast } = useToast();

  const onSubmit: SubmitHandler<QuoteRequestType> = async (formData) => {
    try {
      const { data, status } = await postQuoteRequest(formData);

      if (status === 201) {
        showToast("Вы успешно зарегистрированы!", "success");
      } else if (status === 429) {
        showToast(
          "Вы превысили лимит создания аккаунтов. Повторите попытку через час.",
          "invalid",
        );
      } else {
        handleServerError(data, setError);
      }
    } catch {
      showToast("Произошла ошибка при регистрации.", "error");
    }
  };

  return {
    onSubmit,
  };
};
