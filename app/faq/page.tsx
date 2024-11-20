"use client";

import Link from "next/link";

import { useMemo } from "react";

import { z } from "zod";

import { FAQ_DATA } from "@/utils/faq-data";

import { formFaqSchema } from "@/app/schemas/faq-schema";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";

export default function Faq() {
  const form = useForm<z.infer<typeof formFaqSchema>>({
    resolver: zodResolver(formFaqSchema),
    defaultValues: {
      filter: "",
    },
  });

  const filter = form.watch("filter");

  const handleFilter = useMemo(() => {
    const filteredQuestions = FAQ_DATA.filter((faq) =>
      faq.questions.some(
        (question) =>
          question.question.toLowerCase().includes(filter.toLowerCase()) ||
          question.answer.toLowerCase().includes(filter.toLowerCase())
      )
    );

    return filteredQuestions.map((faq) => {
      const questions = faq.questions.filter(
        (question) =>
          question.question.toLowerCase().includes(filter.toLowerCase()) ||
          question.answer.toLowerCase().includes(filter.toLowerCase())
      );

      return {
        ...faq,
        questions,
      };
    });
  }, [filter]);

  return (
    <main className="flex w-full flex-col items-center py-8 max-[768px]:py-4 max-[768px]:px-0 gap-8 px-16 max-[1024px]:px-10 min-h-[calc(100vh-88px)] !bg-[#eef5ff] justify-start">
      <Card className="w-full p-4 shadow-none border-none flex flex-col justify-between min-h-[350px]">
        <CardHeader className="flex max-[768px]:px-0 max-[768px]:flex-col flex-row items-center justify-between space-y-0 max-[768px]:pt-2 pb-0">
          <h1 className="text-xl font-semibold max-[768px]:pb-4 max-[768px]:w-full max-[768px]:py-4 max-[768px]:flex max-[768px]:items-center max-[768px]:justify-center">
            Perguntas frequentes
          </h1>

          <div className="flex items-center gap-2 max-[768px]:gap-2 justify-end max-[768px]:flex-col max-[768px]:w-full max-[768px]:items-center max-[768px]:justify-start">
            <h3 className="font-semibold min-w-[60px] text-xs text-foreground">
              Filtrar por
            </h3>

            <Form {...form}>
              <FormField
                name="filter"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Digite sua dúvida..."
                        className="h-9 py-5 text-xs placeholder:text-xs w-[150px] lg:w-[300px] max-[768px]:w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Form>
          </div>
        </CardHeader>

        <CardContent
          className={cn(
            "max-[1100px]:px-0 py-0 min-h-[400px] items-center flex max-[768px]:px-0",
            {
              "flex-col": handleFilter.length > 0,
            }
          )}
        >
          {(handleFilter.length > 0 &&
            handleFilter.map((faq) => (
              <div
                key={faq.id}
                className="w-full flex flex-col gap-2 items-start justify-center"
              >
                <div
                  className={cn(
                    "flex items-center justify-start gap-2 mt-10 pb-2",
                    {
                      "mt-10": faq.id === 1,
                    }
                  )}
                >
                  <faq.header.icon size={20} className="text-primary" />
                  <h3 className="text-primary text-sm font-semibold">
                    {faq.header.title}
                  </h3>
                </div>

                {faq.questions.map((faq) => (
                  <Accordion
                    key={faq.id}
                    collapsible
                    type="single"
                    className="w-full"
                  >
                    <AccordionItem
                      value={faq.question}
                      className="text-white border-none"
                    >
                      <AccordionTrigger className="no-underline hover:no-underline hover:bg-[#eef5ff] transition-all duration-300 rounded-xl border hover:border-primary py-3 text-white px-4">
                        <div className="flex items-center justify-start gap-2">
                          {/* <p className="text-primary">{faq.id}.</p> */}
                          <p className="font-medium text-foreground text-left text-xs">
                            {faq.question}
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="py-3 px-3 border-none !border-primary !border-1">
                        <p
                          className="text-muted-foreground text-left text-xs"
                          dangerouslySetInnerHTML={{
                            __html: faq.answer,
                          }}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            ))) || (
            <div className="flex items-center flex-col gap-6 justify-center w-full h-full">
              <div className="border border-primary p-1 flex items-center justify-center rounded-full w-24 h-24">
                <Search className="w-12 h-12 text-primary" />
              </div>
              <p className="text-primary text-center text-lg font-semibold max-w-[450px]">
                Sua pesquisa{" "}
                <strong className="text-primary truncate max-w-[100px]">
                  ”{filter.length > 19 ? `${filter.slice(0, 18)}...` : filter}”
                </strong>{" "}
                não gerou nenhum resultado.
              </p>
              <p className="text-muted-foreground text-md">
                Tente buscar outra palavra.
              </p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex max-[768px]:px-2 w-full pt-8 items-center flex-col justify-center">
          <p className="text-foreground font-semibold text-xs">
            Ainda tem dúvidas?
          </p>
          <p className="text-muted-foreground text-xs">
            Nos envie sua dúvida para o e-mail:
          </p>
          <Link href="mailto:guilherme.clenzi@gmail.com" passHref>
            <p className="underline text-muted-foreground hover:opacity-80 transition-all duration-300 text-primary font-semibold text-xs">
              guilherme.clenzi@gmail.com
            </p>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
