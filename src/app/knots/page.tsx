import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  knots,
  classificationLabels,
  classificationColours,
} from "@/data/knots";

import { KnotsToc, KnotsTocSpacer } from "./toc";

export const metadata = {
  title: "Knots Guide | Christchurch Response Teams",
  description:
    "CDEM Response Team NZ-RT11 reference guide to knots used in rope rescue operations.",
};

export default function KnotsPage() {
  return (
    <main className="pb-16">
      <div className="relative w-full h-[42vh] min-h-[280px] overflow-hidden">
        <Image
          src="/images/knots/cover.jpg"
          alt="NZ-RT11 field training exercise, Corey Shelton 2023"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full container mx-auto flex flex-col items-center justify-center gap-3 text-white text-center px-4">
          <div className="font-mono text-sm tracking-widest text-white/80">
            REFERENCE GUIDE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">KNOTS</h1>
          <div className="font-mono text-sm text-white/80">
            CDEM Response Team NZ-RT11 &middot; Version 1.0
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-8 lg:gap-12 mt-12">
        <div className="flex flex-col gap-12 min-w-0">
          <div className="flex flex-col gap-8">
            {knots.map((knot, index) => (
              <section key={knot.id} id={knot.id} className="scroll-mt-4">
                <Card>
                  <CardHeader className="border-b pb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="font-mono text-sm text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold">
                          {knot.name}
                        </CardTitle>
                        {knot.otherNames && (
                          <div className="text-sm text-muted-foreground">
                            Also known as: {knot.otherNames}
                          </div>
                        )}
                      </div>
                      <span
                        className="font-mono text-xs font-bold tracking-widest text-white px-3 py-1.5 rounded-full shrink-0"
                        style={{
                          backgroundColor:
                            classificationColours[knot.classification],
                        }}
                      >
                        {classificationLabels[knot.classification]}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
                      <div className="flex flex-col gap-4">
                        {knot.facts.map((fact) => (
                          <div key={fact.label}>
                            <div className="font-bold text-sm uppercase tracking-wide mb-1">
                              {fact.label}
                            </div>
                            <p className="text-sm leading-relaxed">{fact.text}</p>
                          </div>
                        ))}

                        {knot.steps && (
                          <div>
                            <div className="font-bold text-sm uppercase tracking-wide mb-2">
                              How to tie it
                            </div>
                            <ol className="list-decimal list-outside pl-5 flex flex-col gap-2 text-sm leading-relaxed">
                              {knot.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {knot.applications.length > 0 && (
                          <div>
                            <div className="font-bold text-sm uppercase tracking-wide mb-2">
                              CDEM Response Team Applications
                            </div>
                            <ul className="flex flex-wrap gap-2">
                              {knot.applications.map((app) => (
                                <li
                                  key={app}
                                  className="text-xs font-mono bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                                >
                                  {app}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {knot.credits.length > 0 && (
                          <div className="text-xs text-muted-foreground mt-2 flex flex-col gap-1">
                            {knot.credits.map((credit) => (
                              <div key={credit.url}>
                                Credit: {credit.text}{" "}
                                <a
                                  href={credit.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline hover:text-foreground"
                                >
                                  {credit.url}
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-4">
                        {knot.image && (
                          <Image
                            src={`/images/knots/${knot.image.filename}`}
                            alt={knot.image.alt}
                            width={knot.image.width}
                            height={knot.image.height}
                            className="w-full h-auto rounded-lg border"
                          />
                        )}
                        {knot.extraImages && knot.extraImages.length > 0 && (
                          <div className="grid grid-cols-2 gap-4">
                            {knot.extraImages.map((img) => (
                              <Image
                                key={img.filename}
                                src={`/images/knots/${img.filename}`}
                                alt={img.alt}
                                width={img.width}
                                height={img.height}
                                className="w-full h-auto rounded-lg border"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            ))}
          </div>

          <Card id="sources">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Sources and Document Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="font-bold uppercase tracking-wide text-xs mb-2">
                      Sources &amp; References
                    </div>
                    <ul className="flex flex-col gap-1 text-muted-foreground">
                      <li>
                        <a
                          href="https://www.animatedknots.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-foreground"
                        >
                          Animated Knots by Grog
                        </a>{" "}
                        — step photos &amp; video demonstrations
                      </li>
                      <li>
                        <a
                          href="https://knots3d.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-foreground"
                        >
                          Knots3D by Nynix LLC
                        </a>{" "}
                        — 3D reference renders
                      </li>
                      <li>
                        Cover photograph &copy; Corey Shelton, 2023 — NZ-RT11
                        field training exercise
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold uppercase tracking-wide text-xs mb-2">
                      Version History
                    </div>
                    <table className="w-full text-left text-muted-foreground">
                      <thead>
                        <tr className="border-b">
                          <th className="font-bold pr-4 py-1">Ver.</th>
                          <th className="font-bold pr-4 py-1">Date</th>
                          <th className="font-bold py-1">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pr-4 py-1">1.0</td>
                          <td className="pr-4 py-1">25 Sep 2026</td>
                          <td className="py-1">First version finalised.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground italic">
                    This is provided for training reference. Always practice new
                    knots under supervision before relying on them in live
                    rope-rescue operations.
                  </p>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                    <dt className="font-bold">Owner</dt>
                    <dd className="text-muted-foreground">
                      CDEM Response Team NZ-RT11
                    </dd>
                    <dt className="font-bold">Parent Agency</dt>
                    <dd className="text-muted-foreground">
                      National Emergency Management Agency (NEMA)
                    </dd>
                    <dt className="font-bold">Created</dt>
                    <dd className="text-muted-foreground">September 25, 2026</dd>
                    <dt className="font-bold">Current Version</dt>
                    <dd className="text-muted-foreground">1.0</dd>
                    <dt className="font-bold">Review Cycle</dt>
                    <dd className="text-muted-foreground">
                      Annual, or after major content changes
                    </dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>
          <KnotsTocSpacer />
        </div>

        <KnotsToc />
      </div>
    </main>
  );
}
