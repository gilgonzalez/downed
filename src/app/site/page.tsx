import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className="h-full w-full relative flex items-center justify-start flex-col pt-10">
      <div className="absolute inset-0 -z-10 w-full bg-primary bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"/>
          <p className="text-center font-semibold text-2xl ">Dummies web creator</p>
          <div style={{filter: 'drop-shadow(2px 2px #ccc)'}} className="bg-gradient-to-r from-secondary  to-secondary-foreground text-transparent bg-clip-text relative ">
            <h1 className="text-6xl font-bold text-center md:text-[10rem] "> Downed </h1>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Image 
              src={'/assets/preview.png' }
              alt='banner'
              width={1200}
              height={1200}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 z-10 absolute">
      
            </div>
          </div>
      </section>
      <section className="flex justify-center items-center gap-4 flex-col md:mt-20">
        <h2 className="text-4xl text-center">
          Choose what fits you right
        </h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If {" you're"} not <br/> ready to commit you can get started for free 
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap mt-6">
          {
            pricingCards.map((card)=>(
              <Card className={cn("w-80 flex flex-col justify-between", 
                card.title === "Unlimited Saas" && "border-2 border-secondary-foreground"
              )} key={card.title}>
                <CardHeader>
                  <CardTitle className={cn("", card.title !== "Unlimited Saas" && "text-muted-foreground")}>
                    {card.title}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl font-bold">{card.price}</span>
                  <span >/month</span>
                </CardContent>
                <CardFooter className={"flex flex-col items-start gap-4"}>
                  <div>
                    {card.features.map((feature)=> (
                      <div key={feature} className="flex gap-2 items-center">
                        <Check color="#070"/>
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={`/agency?plan=${card.priceId}`}
                    className={cn("w-full text-center bg-muted-foreground p-2 rounded-md text-muted",
                      card.title === "Unlimited Saas" && "!bg-primarybutton"
                    )}
                  >Get Started!</Link>
                </CardFooter>
              </Card>
            ))
          }
        </div>
      </section>
    </>

    
  );
}