/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const hotmartLink = "https://pay.hotmart.com/S104990310N";

  const benefits = [
    "Descubra seu possível propósito de vida com mais clareza",
    "Identifique seus talentos naturais e potenciais ocultos",
    "Compreenda bloqueios internos que podem estar travando seu caminho",
    "Receba direcionamentos práticos para seus próximos passos",
    "Sinta mais sentido, direção e conexão com sua essência",
  ];

  const receives = [
    "Seu arquétipo predominante",
    "Missão ou caminho de vida sugerido",
    "Áreas profissionais compatíveis",
    "Pontos fortes naturais",
    "Desafios internos a superar",
    "Recomendações práticas imediatas",
    "Mensagem inspiradora personalizada",
  ];

  const steps = [
    {
      title: "Responda 20 perguntas profundas",
      description:
        "Questões reflexivas e cuidadosamente pensadas para revelar padrões, talentos e inclinações da sua jornada.",
    },
    {
      title: "Receba uma leitura personalizada",
      description:
        "Em poucos minutos, você acessa um resultado claro, acolhedor e direcionado para o seu momento de vida.",
    },
    {
      title: "Aplique os próximos passos",
      description:
        "Use os insights para tomar decisões com mais consciência, direção e confiança.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-900 to-sky-900 text-white">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-300 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-fuchsia-400 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Quiz profundo de autoconhecimento • Acesso imediato
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Descubra Seu Verdadeiro Caminho de Vida
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              Um quiz profundo que revela seu propósito, talentos e próximos passos com base em perguntas reflexivas, autoconhecimento e direção prática.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={hotmartLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-yellow-300 px-8 py-4 text-base font-bold text-slate-900 shadow-2xl transition hover:scale-[1.02] hover:bg-yellow-200"
              >
                Quero Descobrir Meu Caminho Agora
              </a>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center backdrop-blur">
                <div className="text-sm text-white/70">Investimento especial</div>
                <div className="text-3xl font-extrabold">R$ 47,00</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
              <span className="rounded-full bg-white/10 px-4 py-2">20 perguntas profundas</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Resultado personalizado</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Leva poucos minutos</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80"
                alt="Pessoa em momento de reflexão e autoconhecimento"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-10 bottom-10 rounded-3xl border border-white/20 bg-slate-950/55 p-5 text-white shadow-xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.18em] text-yellow-300">
                  Clareza • Propósito • Direção
                </p>
                <p className="mt-2 text-lg font-semibold leading-7">
                  Pare de caminhar no automático e comece a enxergar com mais verdade quem você é e para onde pode ir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 rounded-[2rem] bg-slate-50 p-8 shadow-sm md:grid-cols-2 md:p-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
              Você não está sozinho(a)
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Sentir-se perdido, sem direção ou desconectado da própria vida é mais comum do que parece
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              Há momentos em que tudo parece fora de lugar: você faz o que precisa, mas sente que falta sentido, clareza ou conexão com quem realmente é.
            </p>
            <p>
              Essa sensação não significa fracasso. Muitas vezes, ela é apenas um sinal de que chegou a hora de olhar para dentro com mais profundidade.
            </p>
            <p>
              E sim, existe um caminho para isso: perguntas certas, reflexão guiada e uma leitura que ajude você a enxergar o que talvez ainda não tenha conseguido nomear.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
              A solução
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Um quiz de 20 perguntas profundas e reflexivas para revelar padrões, talentos e direção
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Em poucos minutos, você percorre uma experiência de autoconhecimento pensada para gerar um resultado altamente personalizado, acolhedor e prático.
            </p>

            <div className="mt-8 grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100 font-bold text-violet-700">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-violet-100 via-sky-50 to-amber-50 p-8 shadow-sm">
            <div className="rounded-[1.5rem] bg-white p-7 shadow-md">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
                Resultado personalizado
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Uma leitura feita para o seu momento atual
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                O resultado não traz respostas mágicas. Ele oferece clareza, percepção e direcionamento para que você se compreenda melhor e avance com mais consciência.
              </p>
              <div className="mt-6 rounded-3xl bg-slate-50 p-5">
                <div className="text-sm text-slate-500">Tempo médio</div>
                <div className="mt-1 text-3xl font-extrabold text-slate-900">Poucos minutos</div>
                <div className="mt-4 text-sm text-slate-500">Entrega</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">Acesso imediato após a compra</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300">
              Benefícios
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              O que esse quiz pode despertar em você
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-4 h-11 w-11 rounded-2xl bg-yellow-300/15" />
                <p className="text-lg leading-8 text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
              O que você recebe
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Uma devolutiva rica, inspiradora e prática
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Mais do que um simples teste, você recebe uma interpretação estruturada para ajudar a organizar pensamentos, reconhecer forças e enxergar possibilidades reais.
            </p>
          </div>

          <div className="grid gap-4">
            {receives.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                  ✦
                </div>
                <span className="text-base font-medium text-slate-800 md:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-violet-50 via-white to-sky-50 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
                Credibilidade
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Um método que une psicologia, autoconhecimento e sabedoria universal
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Este quiz foi pensado para oferecer reflexões relevantes e uma leitura significativa, combinando elementos de observação psicológica, padrões de autoconhecimento e princípios universais de desenvolvimento pessoal.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Sem promessas milagrosas, sem exageros e sem respostas prontas: a proposta é ajudar você a enxergar com mais clareza aquilo que já existe dentro de si, mas ainda precisa ser reconhecido.
              </p>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300">
                Garantia emocional
              </span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Um pequeno investimento com potencial de grande transformação
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/80">
                Se você busca clareza, direção e um novo olhar sobre si mesmo(a), este pode ser o primeiro passo para sair do automático e se reconectar com o seu caminho.
              </p>
              <p className="mt-4 leading-7 text-white/75">
                Às vezes, tudo o que falta é um ponto de partida certo. E ele pode começar hoje.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-violet-900 via-indigo-900 to-sky-900 p-[1px] shadow-2xl">
          <div className="rounded-[2.45rem] bg-slate-950 px-6 py-10 text-white md:px-10 md:py-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300">
                  Oferta especial
                </span>
                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Tenha acesso agora ao seu quiz profundo de autoconhecimento
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                  Um valor simbólico diante do que você pode descobrir sobre si: propósito, talentos, bloqueios internos e direção prática para os próximos passos.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white/10 p-6 text-center backdrop-blur md:min-w-[240px]">
                <div className="text-sm text-white/60 line-through">De R$ 67,00</div>
                <div className="mt-2 text-5xl font-extrabold text-yellow-300">R$ 47,00</div>
                <div className="mt-2 text-sm text-white/70">Pagamento pela Hotmart</div>
              </div>
            </div>

            <a
              href={hotmartLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-yellow-300 px-8 py-4 text-center text-lg font-bold text-slate-900 transition hover:scale-[1.01] hover:bg-yellow-200"
            >
              Comprar Agora na Hotmart
            </a>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
            Sua jornada começa aqui
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Sua jornada começa com um único passo
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Permita-se olhar para dentro com mais coragem, profundidade e verdade. O próximo capítulo da sua vida pode começar com uma simples decisão hoje.
          </p>
          <a
            href={hotmartLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-violet-700 px-8 py-4 text-base font-bold text-white shadow-xl transition hover:scale-[1.02] hover:bg-violet-800"
          >
            Quero Descobrir Meu Caminho Agora
          </a>
          <div className="mt-4 text-sm text-slate-500">Apenas R$ 47,00 • acesso imediato</div>
        </div>
      </section>
    </div>
  );
}

