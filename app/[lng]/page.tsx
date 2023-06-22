import { langParamsType } from "@/models/urlType";
import { useTranslation } from "../i18n";
import ClientComponent from "../components/ClientComponent";

export async function generateMetadata({ params: { lng } }: langParamsType) {
  const { t } = await useTranslation(lng);
  return {
    title: t("meta.HomePage.title"),
    description: t("meta.HomePage.description"),
  };
}

export const revalidate = 100;

export default async function Home({ params: { lng } }: langParamsType) {
  return (
    <>
      <div>Hello World!</div>
    </>
  );
}
