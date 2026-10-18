# Investment Bootcamp

[English](https://github.com/KaxaNuk/Investment-Bootcamp/tree/english) · **Español**

**Traducción pendiente de revisión.** Este README traduce al español el README en inglés de la rama
`english`, y ninguna persona la ha revisado todavía.

Construye una estrategia de inversión y prueba la idea correctamente, de una afirmación escrita a
un veredicto honesto, con tu propio KaxaNuk Researcher a tu lado.

El Bootcamp es el primero de los KaxaNuk Training Workshops, abierto a todos, y el que todos toman
primero. Quien empieza se lleva una idea general de todo el proceso de investigación y de las
herramientas. Quien ya sabe aprende a fondo las herramientas y el proceso de KaxaNuk.

KaxaNuk es una firma de investigación de inversiones y desarrollo de tecnología. Construye el
KaxaNuk Researcher, el Data Curator y la Strategy Template, que son de código abierto, y el
Investment Lab y la Analytics Factory, por suscripción. Los talleres enseñan todos ellos.

## Empieza aquí

1. **Abre [S01 · Crea tu investigador y aprende a usar el Lab](S01%20Crea%20tu%20investigador%20y%20aprende%20a%20usar%20el%20Lab.pdf).** Con la presentación sola
   instalas tu investigador, le pones nombre y lo entrenas con un primer artículo, conoces el
   Investment Lab y ves dónde vive cada parte de una estrategia.
2. **Pídele a tu investigador que te lleve por la sesión.** Es tu tutor, en tu idioma.
3. **Toma una sesión a la vez, en orden.** Las seis están listas; "Novedades" dice qué cambió y
   cuándo.

Cada sesión también se da en vivo, en línea, en 90 minutos; S01 también en persona. Para compartir
el curso, comparte el enlace a esta página.

## Las seis sesiones

| Sesión | KN Research Process | Lo que te llevas |
| --- | --- | --- |
| [S01 · Crea tu investigador y aprende a usar el Lab](S01%20Crea%20tu%20investigador%20y%20aprende%20a%20usar%20el%20Lab.pdf) | antes del paso 1 | tu investigador, con nombre; tu primera nota citada; una idea por probar; el mapa de una estrategia |
| [S02 · El objetivo de tu estrategia y el universo invertible](S02%20El%20objetivo%20de%20tu%20estrategia%20y%20el%20universo%20invertible.pdf) | pasos 1–2 · partes A, B, C | tu repositorio, tu `OBJECTIVE.md`, tu semilla point-in-time y tu benchmark |
| [S03 · Obtención de datos e ingeniería de variables](S03%20Obtenci%C3%B3n%20de%20datos%20e%20ingenier%C3%ADa%20de%20variables.pdf) | paso 3 · parte D | tus datos, tu panel, y una señal analizada, conservada o descartada |
| [S04 · Escribe tu hipótesis y construye los portafolios históricos](S04%20Escribe%20tu%20hip%C3%B3tesis%20y%20construye%20los%20portafolios%20hist%C3%B3ricos.pdf) | paso 4 · partes E, F, G | tu blueprint, guardado antes de la regla; tu regla, su control y una alternativa, como portafolios históricos |
| [S05 · Simula tus portafolios y atribuye su rendimiento](S05%20Simula%20tus%20portafolios%20y%20atribuye%20su%20rendimiento.pdf) | pasos 5–6 · parte G | tu historial neto de costos, contra el KN US Equity Core y SPY, y de dónde vino cada punto |
| [S06 · ¿Lista para paper trading? Valida, congela y presenta](S06%20Lista%20para%20paper%20trading%20-%20Valida%2C%20congela%20y%20presenta.pdf) | paso 7 · parte H | tu validación, tu veredicto con los cinco criterios, tu portafolio congelado si pasa, y tu presentación |

El paso 8, producción, queda fuera de este curso. El orden del trabajo es fijo: las afirmaciones
antes que los artículos y el benchmark antes que cualquier resultado; un universo fijado en un
momento dado antes de cualquier dato; una señal analizada antes de cualquier portafolio; el
blueprint guardado antes de la regla; resultados netos de costos declarados; una atribución; la
muestra reservada abierta una vez; y un veredicto, por escrito, en el filtro de paper trading. Una
idea rechazada se reporta con la misma claridad que una conservada, y puede obtener la calificación
completa.

## S01 · Crea tu investigador y aprende a usar el Lab

**La presentación:** [S01 Crea tu investigador y aprende a usar el Lab.pdf](S01%20Crea%20tu%20investigador%20y%20aprende%20a%20usar%20el%20Lab.pdf), 26 diapositivas, que terminan en su cierre y el aviso
legal. Lo que se consulta en lugar de seguirse está en las páginas de referencia del manual.

- **Objetivo.** Instala un compañero de investigación, entrénalo con artículos, conoce el
  Investment Lab y mira cómo se construye una estrategia, paso a paso, con tu investigador a tu
  lado.
- **Los actos.** Instalar: desde GitHub, en tres pasos. Entrenar: entran artículos; skills para
  usarlos. Lab: sus herramientas, e ideas simples por probar. Código: dónde vive cada parte de una
  estrategia, en Golden-Flow.
- **Te llevas:** tu investigador, con nombre; tu primera nota citada; una idea por probar; el mapa
  de una estrategia, del objetivo a la atribución.
- **Evaluación, IA apagada:** qué hace tuyo a tu investigador; cómo lo entrenas; qué hace el Lab,
  paso a paso; dónde vive cada parte de una estrategia.
- **Tarea.** Lee el debate, Harvey, Liu & Zhu (2016) y Jensen, Kelly & Pedersen (2023), y pide
  `teach` sobre cada uno; abre tu investigador en cualquier proyecto; para S02, tu idea en una
  línea, el benchmark que debe superar, y Golden-Flow explorado con `init-example`.
- **Prepara para:** S02, el objetivo. También se da sola, como taller de instalación en vivo.

## S02 · El objetivo de tu estrategia y el universo invertible

**La presentación:** [S02 El objetivo de tu estrategia y el universo invertible.pdf](S02%20El%20objetivo%20de%20tu%20estrategia%20y%20el%20universo%20invertible.pdf), 21 diapositivas, que terminan en su cierre y el aviso
legal.

- **Objetivo.** Empieza tu estrategia, aterriza su objetivo con tu investigador y construye su
  universo point-in-time, con Golden-Flow al lado. Los pasos 1 y 2, antes de cualquier dato.
- **Los actos.** Empezar: `init-strategy`, las dos rutas, el ejemplo. Objetivo: tus palabras,
  luego las afirmaciones; una fuente a favor y una en contra; el benchmark, elegido primero.
  Universo: los miembros de entonces, las acciones muertas contadas, y la fecha desde la que es
  utilizable.
- **Te llevas:** tu repositorio, tu `OBJECTIVE.md` y tu semilla.
- **Evaluación, IA apagada:** qué te da `init-strategy` y qué ruta tomas; qué afirma tu objetivo y
  qué lo resolvería; por qué tu universo conserva las acciones muertas; contra qué lo mides, y por
  qué lo elegiste antes.
- **Tarea.** `read` una fuente por afirmación y una en contra, luego `/objective` otra vez; termina
  la semilla, con las muertas; elige tu proveedor de datos y, si la pide, su clave en
  `Config/.env`; pregunta `next`.
- **Prepara para:** S03, tus datos.

## S03 · Obtención de datos e ingeniería de variables

**La presentación:** [S03 Obtención de datos e ingeniería de variables.pdf](S03%20Obtenci%C3%B3n%20de%20datos%20e%20ingenier%C3%ADa%20de%20variables.pdf), 21 diapositivas, que terminan en su cierre y el aviso
legal.

- **Objetivo.** De tu proveedor a una señal analizada: el Data Curator, el Data Refinery y el Data
  Analyzer, con Golden-Flow al lado. El paso 3 de los ocho.
- **Los actos.** Obtener: todo tu universo en una descarga, y tus variables `c_*`. Refinar: tu
  universo fecha por fecha, rangos y z-scores entre acciones, tu peso como participación del valor
  operado. Analizar: tu señal contra comprar y mantener, y la misma estrategia con otra señal.
- **Te llevas:** tus datos, tu panel, y una señal conservada o descartada.
- **Evaluación, IA apagada:** por qué un solo código sirve para cualquier proveedor; cuándo una
  variable es `c_*` y cuándo `r_*`; por qué una señal que rinde menos que mantener puede servir; por
  qué se analiza una señal sola, antes del portafolio.
- **Tarea.** Todo tu universo, también las muertas, y su cobertura; tu `r_*` explorada contra
  mantener; conservar o descartar, en `RESULTS.md`; para S04, el `BLUEPRINT_1.md` de Golden-Flow.
- **Prepara para:** S04, tu portafolio.

## S04 · Escribe tu hipótesis y construye los portafolios históricos

**La presentación:** [S04 Escribe tu hipótesis y construye los portafolios históricos.pdf](S04%20Escribe%20tu%20hip%C3%B3tesis%20y%20construye%20los%20portafolios%20hist%C3%B3ricos.pdf), 23 diapositivas, que terminan en su cierre y el aviso
legal.

- **Objetivo.** De tus señales de S03 al experimento 1: tu hipótesis en el blueprint, luego tus
  portafolios históricos, con lo que se sabía cada día.
- **Los actos.** Hipótesis: refutable, redactada, criticada y guardada antes de la regla.
  Construir: selección, tamaño y momento, del peso igual a catorce métodos, y cada cuánto
  rebalancear. Realismo: la señal en t − 1, sin sobrevivientes, los eventos corporativos, las
  invariantes y el sobreajuste.
- **Te llevas:** tu blueprint, tu regla y tus portafolios.
- **Evaluación, IA apagada:** por qué la hipótesis antes de la regla; por qué pesos iguales
  primero; cuándo lees la señal y cuándo compras; qué hace tu portafolio con una acción que compra
  otra empresa.
- **Tarea.** Tu regla, tu control con un ingrediente fuera, y una alternativa, cada una pasando
  las cinco invariantes y con su rotación medida; N al día; tus dos filas de costos.
- **Prepara para:** S05, el backtest.

## S05 · Simula tus portafolios y atribuye su rendimiento

**La presentación:** [S05 Simula tus portafolios y atribuye su rendimiento.pdf](S05%20Simula%20tus%20portafolios%20y%20atribuye%20su%20rendimiento.pdf), 21 diapositivas, que terminan en su cierre y el aviso
legal.

- **Objetivo.** De tus portafolios de S04 a su historial neto de costos, contra el benchmark KN US
  Equity Core y SPY, y de dónde vino cada punto.
- **Los actos.** Simular: el Backtest Engine paso a paso; comisión, deslizamiento y reserva; neto,
  o nada. Comparar: el KN US Equity Core y SPY; Sharpe, Sortino, caída máxima, tracking error;
  exceso, activo y alfa de Jensen. Atribuir: el KN US Equity Factor Model; factores, sectores y la
  parte idiosincrática; dos variantes, componente por componente.
- **Te llevas:** tu historial, tu tabla y tu atribución.
- **Evaluación, IA apagada:** por qué neto, y qué revisas primero; sobre qué se miden el exceso,
  el activo y el alfa de Jensen; con qué peso se atribuye cada día; por qué el factor model casi no
  ve un cruce de promedios.
- **Tarea.** Tus tres portafolios netos, cada corrida completa, contra los dos benchmarks; el
  factor model cuadrado y Brinson-Fachler por sector; `FINDINGS_1.md` con tu veredicto, y N al día.
- **Prepara para:** S06, paper trading.

## S06 · ¿Lista para paper trading? Valida, congela y presenta

**La presentación:** [S06 Lista para paper trading - Valida, congela y presenta.pdf](S06%20Lista%20para%20paper%20trading%20-%20Valida%2C%20congela%20y%20presenta.pdf), 23 diapositivas, que terminan en su cierre y el aviso
legal.

- **Objetivo.** Del hallazgo de S05 a la decisión: sin errores, los cinco criterios del filtro, el
  portafolio congelado para verlo fuera de muestra, y la estrategia presentada ante un comité.
- **Los actos.** Validar: lo que no puede fallar; el blueprint juzga la corrida; la muestra
  reservada, una vez; una curva de variantes. Decidir: cinco criterios, todos; el veredicto de tu
  portafolio; la firma es de una persona. Congelar: el portafolio tal cual, un día de prueba antes,
  luego cada día después del cierre. Presentar: las nueve filas de la rúbrica, las preguntas de un
  juez respondidas con archivos, y diez minutos.
- **Te llevas:** tu validación, tu veredicto, tu portafolio congelado si pasa, y tu presentación.
- **Evaluación, IA apagada:** qué revisas antes de decidir; por qué los cinco criterios, todos;
  qué se congela, y por qué nunca dos veces; qué miras fuera de muestra, y qué no.
- **Tarea.** Cierra la parte H: la lista revisión por revisión, tu muestra reservada abierta una
  vez, tu curva de variantes con N; los cinco criterios con su evidencia y `BITACORA.md` con tu sí o
  tu no; diez minutos, ensayados con tus archivos.
- **Prepara para:** el día de presentación, y los tres pilares.

## Cómo funciona cada sesión

**Dos rutas, una estrategia.** Cada sesión funciona de dos maneras, y puedes tomar cualquiera:

- **Sin código:** construyes la estrategia con clics en la app del KaxaNuk Investment Lab, en
  [lab.kaxanuk.mx](https://lab.kaxanuk.mx).
- **Código:** la construyes en Python sobre la KaxaNuk Strategy Template, con la skill de tu
  investigador para cada paso.

Las dos rutas guardan todo en un repositorio de estrategia, hecho con `init-strategy`, donde tu
investigador escribe tus documentos: el objetivo, el blueprint, los hallazgos y los resultados. Los
mismos motores valúan y atribuyen los portafolios de las dos rutas, así que una cifra significa lo
mismo en ambas.

**El ejemplo, de principio a fin: Golden-Flow.** Una estrategia resuelta en cada paso viene con el
investigador; cada sesión muestra ahí su paso hecho. Léela en
[GitHub](https://github.com/KaxaNuk/KaxaNuk-Researcher/tree/main/examples/strategy/golden-flow)
sin instalar nada. Desde S04, las cifras de las sesiones vienen de un portafolio sobre precios de
Sharadar del KN US Equity Core, calculado para el curso y marcado así.

**Los 90 minutos,** en vivo; la presentación, leída a solas, sigue los mismos bloques:

| Hora | Bloque | IA | Qué pasa |
| --- | --- | --- | --- |
| 0:00 | Recuperación y primer entregable | | dónde te dejó la sesión anterior, y el mapa de esta |
| 0:05 | La idea | | el paso, sus métodos y sus trampas, con cifras reales |
| 0:35 | Hazlo, en las dos rutas | encendida | el paso, en vivo, en código y en el Lab |
| 1:10 | Evaluación | apagada | las ideas de la sesión, con tus palabras, a mano |
| 1:20 | Tarea y cierre | | qué terminar, y lo que sigue |

**Tu investigador, tu tutor.** Instalas el KaxaNuk Researcher en S01, en tu propio idioma. Desde
entonces es el primer lugar al que llevar una pregunta, y sigue cada sesión contigo. Enseña las
ideas difíciles (`teach <tema>`), responde a partir de lo que has leído y lo cita (`query`), y
dice qué sigue (`next`). Es tutor; no piensa por ti. Te pide primero tu predicción, da pistas por
niveles, no escribe código en un bloque marcado IA apagada, nunca calcula una cifra de desempeño y
nunca da consejos de inversión.

**Por qué la IA está apagada cuando se te evalúa.** Solo se evalúa lo que puedes hacer y explicar
con la IA apagada. Un asistente que piensa por ti puede sustituir el aprendizaje; uno diseñado como
tutor puede acelerarlo:
- Bastani et al. (2025), *Generative AI without guardrails can harm learning: Evidence from high
  school mathematics*, PNAS 122(26);
- Kestin et al. (2025), *AI tutoring outperforms in-class active learning: an RCT introducing a
  novel research-based design in an authentic educational setting*, Scientific Reports 15,
  [doi.org/10.1038/s41598-025-97652-6](https://doi.org/10.1038/s41598-025-97652-6);
- Shen and Tamkin (2026), *How AI Impacts Skill Formation*, arXiv:2601.20245.

<details>
<summary>La lista de revisión de KaxaNuk, para cada diff que escribe un agente</summary>

1. **Alcance.** Implementa una especificación, afirmación, predicción o blueprint guardado antes,
   y nada más.
2. **Pruebas.** Las tuyas, sin que el agente las toque, en rojo antes y en verde después. Un assert
   por prueba.
3. **Causalidad.** Un valor fechado en t usa datos hasta t-1. Los rangos son por fecha, nunca
   mezclados. Los datos fundamentales y las series macro se unen en la fecha en que estuvieron
   disponibles.
4. **Universo.** La membresía viene de la semilla. Nada se selecciona por columnas `current_*`. Los
   reemplazos se registran.
5. **Datos faltantes.** Nulo no es cero. Ningún `fillna(0)` ni relleno hacia adelante en silencio.
6. **Falla en voz alta.** Los errores se lanzan con un mensaje. Ningún `except` desnudo, ningún
   salto en silencio.
7. **Unidades.** Frecuencia, anualización, porcentaje o decimal, y costos declarados.
8. **Estilo de la casa.** ruff y el verificador Bloom Code limpios.
9. **Cifras.** Cada cifra de un portafolio se rastrea a un archivo del motor o al manifiesto de
   corridas, o se etiqueta "cálculo didáctico" o "derivada".
10. **Ensayos y muestras reservadas.** Cada corrida se cuenta. Las fechas de la muestra reservada
    no se tocan hasta que se abre.
11. **Secretos e higiene.** Ninguna clave impresa ni guardada en el repositorio. Las salidas de los
    notebooks, borradas.
12. **Citas.** Cada referencia lleva a una nota. Ninguna viene de la memoria del modelo.
13. **Explica.** Puedes explicar cada línea cambiada con la IA apagada (ruta sin código: cada
    resultado y cada tabla), y el mensaje del commit dice qué se movió y por qué.

</details>

## Qué necesitas y cuánto cuesta

Para instalar tu investigador solo necesitas un asistente de programación. Todo lo demás lo eliges
tú: las herramientas son opciones, y tus archivos son los mismos elijas lo que elijas.

| Para | Opciones | Cuánto cuesta, consultado el 2026-10-11 |
| --- | --- | --- |
| Tu asistente | Claude Code, en la app de escritorio de Claude | un plan de pago de Claude: Pro, $20 al mes, o $17 al mes con pago anual; Max desde $100 al mes; el plan Free no incluye Claude Code |
| | Codex, en la app de Codex | en cada plan de ChatGPT, Free incluido (Free todavía no se ha probado para esta instalación); Go, $8 al mes; Plus, $20 al mes |
| Tu editor | PyCharm o VS Code | gratis: el núcleo de PyCharm, y VS Code |
| Versiones | GitHub Desktop, o git | gratis; una cuenta de GitHub, gratis, solo para `backup` |
| La vista de la biblioteca | Obsidian, o la vista previa de tu editor | gratis |
| Datos | Yahoo Finance, para una primera prueba; FMP; LSEG | consulta los [proveedores del Data Curator](https://kaxanuk-data-curator.readthedocs.io) |
| Sin código, y los motores | el Investment Lab | por suscripción: lab@kaxanuk.mx |
| Opcional | la Analytics Factory | por suscripción; una muestra a solicitud: analytics@kaxanuk.mx |

Gemini CLI, Cursor y Copilot CLI también corren el investigador: consulta la página de cada uno.
Yahoo Finance no tiene datos fundamentales, ni VWAP, ni precios sin ajustar, así que un backtest
sobre sus datos es impreciso. Desde S04 las dos rutas usan los motores del Investment Lab; sin
licencia, sigues S05 y S06 con las cifras propias de las sesiones. Los precios cambian: revisa cada
página antes de pagar.

## Para quién es

Para cualquiera que quiera aprender el proceso de investigación y las herramientas de KaxaNuk,
principiante o avanzado, y para cualquiera que quiera un compañero de investigación para su propio
trabajo:

- **Universidades:** programas de finanzas, economía, ingeniería y métodos cuantitativos que
  quieran un proyecto semestral con un proceso de investigación real.
- **Estudiantes** y **participantes de KN Hack**: el Bootcamp es la preparación natural para
  KN Hack.
- **Equipos de inversión** (fondos de pensiones, administradoras de activos, aseguradoras,
  asesores, family offices), **gestores emergentes** y **profesionales independientes**.
- **Cualquier otra persona:** una abogada, un ingeniero, una estudiante de cualquier carrera. S01
  se sostiene por sí sola, y tu investigador trabaja en cualquier tema.

**No se requiere ninguna formación previa.** Cada sesión nombra las sesiones de los pilares que
hay detrás, y su tarea te manda a ellas para lo básico o para ir más a fondo.

## Cómo tomarlo

- **Por tu cuenta, desde el enlace.** Sigue la presentación de cada sesión con tu investigador, y
  haz su tarea a tu nivel.
- **En vivo, en línea.** 90 minutos por sesión, con tarea entre sesiones.
- **En vivo, en persona.** S01, para instalar y aprender el investigador juntos.
- **Como equipo de KN Hack:** empieza S01 unas cinco semanas antes del evento.

**Idiomas.** El material está en inglés, en la rama `english`, y en español en esta rama,
pendiente de revisión. Tu investigador trabaja en cualquier idioma, así que puedes pedirle que te
explique cualquier sesión en el tuyo.

## El día de presentación y la evaluación

La presentación es un día aparte después de S06: un demo day de la generación, o KN Hack para esa
generación.

- **Diez minutos ante un comité**, cada parte desde un archivo: la hipótesis y por qué debería
  funcionar (`OBJECTIVE.md`); el universo y el benchmark, con las acciones muertas (`Universe/`); la
  regla y su control, guardados primero (`BLUEPRINT_1.md`); el neto, contra el control y el
  benchmark, con N, y de dónde vino (`FINDINGS_1.md`); y el veredicto, con lo que sigue
  (`Paper_Trading/BITACORA.md`).
- **Calificada con la rúbrica 3x3:** tres áreas (definición de la estrategia, ingeniería de
  variables, diseño de la estrategia), tres filas cada una, cada fila calificada con 0, 33, 66
  o 100. **No hay ninguna fila para el rendimiento.**
- **Controles del proceso, de aprobado o reprobado:** los resultados se reproducen; el guardado del
  blueprint va antes de la regla; cada cifra se rastrea a un archivo o lleva una etiqueta; el
  conteo de ensayos se publica; la muestra reservada se abre una vez; los cinco criterios del filtro
  se evalúan con evidencia. Un no, medido, contado y explicado, puntúa tan completo como un sí.
- **Los certificados** se emiten solo en una defensa en vivo. Un certificado acredita que se
  completó un programa educativo, nunca una calificación para administrar dinero.

## Para ir más a fondo: los tres pilares

Tres talleres de pilares van más a fondo, después del Bootcamp o a la par, y se abren conforme se
publica cada uno:

- **Coding Foundations:** programar, y programar con IA.
- **Financial Markets:** los mercados, las ideas de investigación y los conjuntos de datos de la
  Analytics Factory.
- **Mathematical Finance:** las matemáticas y la estadística de la investigación.

Una regla recorre los cuatro talleres: escribe lo que esperas, guárdalo, luego haz el trabajo. La
especificación antes que el código; la afirmación y el benchmark antes que los datos; la
predicción antes que la estimación; el blueprint antes que la regla.

## Preguntas

Lleva tu pregunta primero a tu investigador. Luego: workshops@kaxanuk.mx. Para el Investment Lab:
lab@kaxanuk.mx. Para la Analytics Factory: analytics@kaxanuk.mx.

## Novedades

- **2026-10-18. Las seis sesiones, reestructuradas.** Cada presentación se rehízo alrededor de su
  paso, con cifras calculadas sobre precios de Sharadar del benchmark KN US Equity Core: S01 crea
  tu investigador y recorre el Lab; S02 aterriza el objetivo y el universo; S03 obtiene los datos y
  analiza una señal; S04 escribe la hipótesis y construye los portafolios históricos; S05 los
  simula y los atribuye; S06 valida, decide, congela y presenta. Las presentaciones están ahora en
  la raíz de esta página, nombradas por su título; las inglesas, en la rama `english`.
- **2026-10-14.** Cada presentación redibujada, terminando en su cierre; lo que se consulta en
  lugar de seguirse pasó a las páginas de referencia del manual.
- **2026-10-11.** S01 rehecha para instalar tu investigador con la presentación sola; las
  presentaciones de la edición anterior se retiraron.

## Licencia y aviso legal

El material se comparte bajo [CC BY 4.0](LICENSE). Es material educativo. Nada aquí es una
recomendación para comprar, vender o mantener ningún valor. Todo backtest es hipotético. Cada cifra
sobre un portafolio viene del motor que la produjo, o se etiqueta como cálculo propio del curso. La
promesa es una prueba correcta de una idea, nunca mejores rendimientos.

<details>
<summary>Para tu investigador: el mapa del curso</summary>

La skill `workshop` del KaxaNuk Researcher lee este bloque para guiar a un participante por
cualquier sesión. Se queda en inglés: es el formato que lee el investigador, escrito por
`course_map.py` a partir de `course.yml`.

<!-- course-map:start -->

```yaml
# kaxanuk-course-map 1
course: Investment Bootcamp
checked: 2026-10-13
process:
  steps:
    1: Research
    2: Universe
    3: Data
    4: Portfolio
    5: Backtest
    6: Attribution
    7: Paper trading
    8: Production
  parts:
    A: The objective, before any paper is read
    B: The reading, for each claim
    C: The universe
    D: The data
    E: The blueprint, before the rule
    F: The broad reading
    G: The cycle (portfolio, backtest, attribution)
    H: The results
blocks:
- name: Retrieval and first deliverable
  minutes: 5
  ai: none
- name: The idea
  minutes: 30
  ai: none
- name: Do it, on both tracks
  minutes: 35
  ai: 'on'
- name: Checkpoint
  minutes: 10
  ai: 'off'
  assessed: true
- name: Homework and close
  minutes: 10
  ai: none
tracks:
  no_code: the Investment Lab app, by clicking, for steps 2 to 6
  code: the KaxaNuk Strategy Template, with the researcher's skill for each step
  meet_in: one strategy repository per learner, made with init-strategy
tools:
  researcher:
    name: KaxaNuk Researcher
    docs: https://github.com/KaxaNuk/KaxaNuk-Researcher
    version: 1.13.0
    apm: 0.33.0
    access: open source
    checked: 2026-10-11
  lab:
    name: KaxaNuk Investment Lab
    app: https://lab.kaxanuk.mx
    contact: lab@kaxanuk.mx
    access: by subscription
    checked: 2026-10-11
  analytics_factory:
    name: KaxaNuk Analytics Factory
    site: https://www.kaxanuk.mx/analytics
    contact: analytics@kaxanuk.mx
    access: by subscription; a sample of its data sets on request by e-mail
    checked: 2026-10-11
  libraries:
    data_curator:
      step: 3
      version: 0.50.0
      released: 2026-08-28
      access: open source
    data_refinery:
      step: 3
      access: in the Investment Lab
    data_analyzer:
      step: 3
      access: in the Investment Lab
    portfolio_construction:
      step: 4
      version: 2.0.0
      released: 2026-09-27
      access: in the Investment Lab
    backtest_engine:
      step: 5
      version: 0.67.0
      released: 2026-09-26
      access: in the Investment Lab
    attribution_analysis:
      step: 6
      version: 0.3.0
      released: 2026-09-27
      access: in the Investment Lab
providers:
  checked: 2026-10-11
  docs: https://kaxanuk-data-curator.readthedocs.io
  list:
  - name: Yahoo Finance
    cost: no key named in the Data Curator's docs
    note: market data only, through the separate extension (0.5.1, 2026-08-25); for a first test; no fundamentals,
      no VWAP, no unadjusted prices; no data for the 178 names in Golden-Flow's seed that left the market;
      the backtest is imprecise and its input columns must be moved
  - name: FMP
    cost: 'an API key; free Basic: 250 calls a day, end-of-day data, 5 years of history; Starter $29 a
      month ($19 billed annually): annual fundamentals, 5 years; Premium $69 a month ($49 billed annually):
      full fundamentals, 30+ years'
    source: https://site.financialmodelingprep.com/developer/docs/pricing
  - name: LSEG
    cost: a paid Workspace subscription and a registered App Key; the Workspace app open while downloading;
      quarterly fundamentals only
  - name: Sharadar
    cost: paid
    note: available on KaxaNuk's word (2026-10-17), ahead of the Data Curator's docs; matches KaxaNuk's
      Analytics
costs:
  checked: 2026-10-11
  list:
  - for: your assistant
    option: Claude Code
    cost: 'a paid Claude plan: Pro $20 a month, or $17 a month billed yearly; Max from $100 a month; the
      Free plan has no Claude Code'
    source: https://claude.com/pricing
  - for: your assistant
    option: Codex
    cost: in every ChatGPT plan, Free included (Free not yet tested for this install); Go $8 a month;
      Plus $20 a month; or an API key at API rates
    source: https://learn.chatgpt.com/docs/pricing
  - for: backup
    option: a GitHub account
    cost: free; needed only for backup
    source: https://github.com/pricing
  - for: the editor
    option: PyCharm or VS Code
    cost: free (PyCharm's core, with a 30-day Pro trial; VS Code)
    source: https://www.jetbrains.com/pycharm/
  - for: versions and the library view
    option: GitHub Desktop, git, Obsidian
    cost: free
    source: https://docs.github.com/en/desktop/overview/about-github-desktop
  - for: data
    option: Yahoo Finance, FMP, LSEG
    cost: see providers
    source: https://kaxanuk-data-curator.readthedocs.io
  - for: no code
    and the engines: null
    option: Investment Lab
    cost: by subscription; lab@kaxanuk.mx
    source: https://lab.kaxanuk.mx
  - for: optional
    option: Analytics Factory
    cost: by subscription; a sample on request, analytics@kaxanuk.mx
    source: https://www.kaxanuk.mx/analytics
example:
  name: golden-flow
  kind: strategy
  read_online: https://github.com/KaxaNuk/KaxaNuk-Researcher/tree/main/examples/strategy/golden-flow
  copy_with: init-example
  shipped_in: KaxaNuk Researcher 1.13.0
  checked: 2026-10-13
  run:
    date: 2026-10-06
    backtest_engine: 0.66.0
    attribution_analysis: 0.2.0
pillars:
  CF:
    name: Coding Foundations
    repo: https://github.com/KaxaNuk/Coding-Foundations
    public: false
  FM:
    name: Financial Markets
    repo: https://github.com/KaxaNuk/Financial-Markets
    public: false
  MF:
    name: Mathematical Finance
    repo: https://github.com/KaxaNuk/Mathematical-Finance
    public: false
pillar_sessions:
  CF S01:
    folder: S01-Terminal-Environment-and-Git
    title: Terminal, Environment and Git
  CF S03:
    folder: S03-Functions-Types-and-Tests
    title: Functions, Types and Tests
  CF S04:
    folder: S04-The-Agent-Loop
    title: 'The Agent Loop: Plan, Go, Review, Commit'
  CF S05:
    folder: S05-NumPy-pandas-and-Notebooks
    title: NumPy, pandas and Notebooks
  CF S06:
    folder: S06-Time-Without-Look-Ahead
    title: Time Without Look-Ahead
  CF S07:
    folder: S07-Features-as-Data-Curator-Functions
    title: Features as Data Curator Functions
  CF S08:
    folder: S08-Weight-Files-and-Invariants
    title: Weight Files and Invariants
  CF S09:
    folder: S09-Design-Before-You-Prompt
    title: Design Before You Prompt
  CF S10:
    folder: S10-Architecture-of-a-KaxaNuk-Library
    title: Architecture of a KaxaNuk Library
  CF S11:
    folder: S11-House-Rules-and-Code-Review
    title: House Rules and Code Review
  CF S12:
    folder: S12-Capstone-Ship-a-Tested-Release
    title: 'Capstone: Ship a Tested Release'
  FM S01:
    folder: S01-Ecosystem-and-Security-Master
    title: The Ecosystem and the Security Master
  FM S02:
    folder: S02-Prices-Total-Returns-and-Time-Value
    title: Prices, Total Returns and Time Value
  FM S03:
    folder: S03-Rates-Bonds-and-the-Yield-Curve
    title: Rates, Bonds and the Yield Curve
  FM S05:
    folder: S05-Statements-Valuation-and-the-Three-Dates
    title: Statements, Valuation and the Three Dates
  FM S06:
    folder: S06-Indices-Benchmarks-ETFs-and-Survivorship
    title: Indices, Benchmarks, ETFs and Survivorship
  FM S07:
    folder: S07-Liquidity-Trading-Costs-and-Capacity
    title: Liquidity, Trading Costs and Capacity
  FM S08:
    folder: S08-Efficiency-Anomalies-and-Decay
    title: Efficiency, Anomalies and Decay
  FM S09:
    folder: S09-Risk-Diversification-and-the-Long-Only-Book
    title: Risk, Diversification and the Long-Only Book
  FM S10:
    folder: S10-CAPM-Beta-and-the-Market
    title: CAPM, Beta and the Market
  FM S11:
    folder: S11-Factor-Models-Risk-Factors-and-Return-Signals
    title: 'Factor Models: Risk Factors and Return Signals'
  FM S12:
    folder: S12-Capstone-Performance-Attribution-and-Track-Records
    title: 'Capstone: Performance, Attribution and Track Records'
  MF S01:
    folder: S01-Return-Arithmetic
    title: Return Arithmetic
  MF S02:
    folder: S02-Distributions-Tails-and-Drawdowns
    title: Distributions, Tails and Drawdowns
  MF S03:
    folder: S03-Simulation-Bootstrap-and-the-Null
    title: Simulation, the Bootstrap and the Null
  MF S04:
    folder: S04-Estimation-Inference-and-Multiple-Comparisons
    title: Estimation, Inference and Multiple Comparisons
  MF S05:
    folder: S05-Linear-Algebra-and-Covariance
    title: Linear Algebra and Covariance
  MF S06:
    folder: S06-Regression-and-Its-Failures
    title: Regression and Its Failures
  MF S07:
    folder: S07-Time-Series-and-Trend-Signals
    title: Time Series and Trend Signals
  MF S08:
    folder: S08-Cross-Sectional-Signals-IC-and-Fama-MacBeth
    title: 'Cross-Sectional Signals: IC, Breadth and Fama-MacBeth'
  MF S09:
    folder: S09-PCA-Clusters-and-Regimes
    title: 'Unsupervised Learning: PCA, Clusters and Regimes'
  MF S10:
    folder: S10-Portfolio-Optimisation-and-Estimation-Error
    title: Portfolio Optimisation and Estimation Error
  MF S11:
    folder: S11-Supervised-Learning-Without-Leakage
    title: Supervised Learning Without Leakage
  MF S12:
    folder: S12-Capstone-Overfitting-Deflated-Sharpe-and-the-Holdout
    title: 'Capstone: Overfitting, the Deflated Sharpe and the Holdout'
sessions:
- id: S01
  folder: null
  title: Create Your Researcher and Learn to Use the Lab
  state: ready
  deck: S01 Crea tu investigador y aprende a usar el Lab.pdf
  steps: []
  parts: []
  lab:
  - module: the app's tour
    state: available
  researcher:
    commands:
    - init-researcher
    - interview
    - next
    - read
    - query
    - teach
    - study
    - philosophy
    - brief
    - backup
    - remember this
    skills:
    - workshop
    teach:
    - efficient markets and why research is paid
    - the ten papers of the timeline
    - why a rule needs a control
    - when to use the Researcher, the Lab, or both
  example_files:
  - README.md
  - OBJECTIVE.md
  - RESULTS.md
  - Experiments/Experiment_1/FINDINGS_1.md
  pillars:
    core: []
    helpful:
    - CF S01
    - CF S04
    further:
    - FM S08
    - FM S01
    - MF S01
  module: B0 Your Researcher
- id: S02
  folder: null
  title: Your Strategy's Objective and the Investable Universe
  state: ready
  deck: S02 El objetivo de tu estrategia y el universo invertible.pdf
  steps:
  - 1
  - 2
  parts:
  - A
  - B
  - C
  lab:
  - module: 'Universe: Creator'
    state: available
  researcher:
    commands:
    - init-strategy
    - objective
    - read
    - query
    - teach
    - next
    skills:
    - experiment-lifecycle
    - universe-point-in-time
    - workshop
    teach:
    - survivorship bias
    - point-in-time membership
    - choosing a benchmark
  example_files:
  - OBJECTIVE.md
  - Bibliotheca/BIBLIOGRAPHY.md
  - Experiments/Experiment_1/JOURNAL_1.md
  - Universe/Investable_Universe.csv
  - RESULTS.md
  - Experiments/Experiment_1/FINDINGS_1.md
  pillars:
    core:
    - CF S01
    - CF S04
    - CF S05
    - FM S06
    helpful:
    - FM S01
    - FM S02
    - FM S08
    - FM S11
    - MF S04
    further:
    - FM S12
    - MF S01
    - MF S06
  module: B1 From Idea to Evidence
- id: S03
  folder: null
  title: Getting the Data and Feature Engineering
  state: ready
  deck: S03 Obtención de datos e ingeniería de variables.pdf
  steps:
  - 3
  parts:
  - D
  lab:
  - module: 'Data: Curator'
    state: available
  - module: 'Data: Refinery'
    state: coming
    instead: Data/refinery.py
  - module: 'Data: Analyzer'
    state: in part
    instead: Data/analyzer.ipynb
  researcher:
    commands:
    - next
    - query
    - teach
    - init-example
    skills:
    - data-curator-custom-calculations
    - universe-point-in-time
    - data-analyzer-runs
    - workshop
    teach:
    - look-ahead bias
    - the information coefficient and ICIR
    - the fundamental law
  example_files:
  - Data/curator.py
  - Universe/universe.ipynb
  - Data/refinery.py
  - Data/analyzer.ipynb
  - RESULTS.md
  pillars:
    core:
    - CF S05
    - CF S06
    - CF S07
    - MF S08
    helpful:
    - FM S02
    - FM S05
    - FM S07
    - FM S09
    - MF S01
    - MF S05
    - MF S07
    further:
    - CF S03
    - CF S12
    - FM S11
    - MF S11
  module: B1 From Idea to Evidence
- id: S04
  folder: null
  title: Write Your Hypothesis and Build the Historical Portfolios
  state: ready
  deck: S04 Escribe tu hipótesis y construye los portafolios históricos.pdf
  steps:
  - 4
  parts:
  - E
  - F
  - G
  lab:
  - module: 'Portfolio: Construction'
    state: available
  researcher:
    commands:
    - blueprint
    - read
    - objective
    - query
    - teach
    - next
    skills:
    - experiment-lifecycle
    - portfolio-construction-runs
    - backtest-engine-runs
    - workshop
    teach:
    - pre-registration and the blueprint
    - equal weight against risk parity and HRP
  example_files:
  - Experiments/Experiment_1/BLUEPRINT_1.md
  - Experiments/Experiment_1/JOURNAL_1.md
  - Experiments/portfolio_construction.py
  - Experiments/Experiment_1/experiment_1.ipynb
  - RESULTS.md
  pillars:
    core:
    - MF S12
    - CF S08
    - FM S09
    helpful:
    - CF S06
    - CF S09
    - FM S03
    - FM S06
    - FM S07
    - MF S05
    - MF S09
    - MF S10
    further:
    - CF S11
    - CF S12
  module: B2 From Book to Verdict
- id: S05
  folder: null
  title: Simulate Your Books and Attribute Their Return
  state: ready
  deck: S05 Simula tus portafolios y atribuye su rendimiento.pdf
  steps:
  - 5
  - 6
  parts:
  - G
  lab:
  - module: 'Backtest: Parameters'
    state: available
  - module: Attribution
    state: available
  researcher:
    commands:
    - next
    - query
    - teach
    - read
    skills:
    - backtest-engine-runs
    - attribution-analysis-runs
    - alpha-decomposition
    - experiment-lifecycle
    - workshop
    teach:
    - trading costs
    - Brinson-Fachler attribution
    - factor models and idiosyncratic return
  example_files:
  - Experiments/Experiment_1/experiment_1.ipynb
  - Experiments/Experiment_1/FINDINGS_1.md
  - Experiments/Experiment_1/JOURNAL_1.md
  - RESULTS.md
  pillars:
    core:
    - FM S07
    - FM S12
    - MF S01
    helpful:
    - CF S10
    - FM S02
    - FM S10
    - FM S11
    - MF S02
    - MF S06
    further:
    - CF S11
    - FM S09
    - MF S08
  module: B2 From Book to Verdict
- id: S06
  folder: null
  title: Ready for Paper Trading? Validate, Freeze and Present
  state: ready
  deck: S06 Lista para paper trading - Valida, congela y presenta.pdf
  steps:
  - 7
  parts:
  - H
  lab: []
  researcher:
    commands:
    - challenge
    - objective
    - next
    - query
    - teach
    - read
    - blueprint
    skills:
    - experiment-lifecycle
    - paper-trading-gate
    - alpha-decomposition
    - how-we-work
    - workshop
    teach:
    - multiple testing and the deflated Sharpe ratio
    - when a backtest has earned paper trading
  example_files:
  - RESULTS.md
  - Paper_Trading/BITACORA.md
  - Experiments/Experiment_1/FINDINGS_1.md
  - Experiments/Experiment_1/JOURNAL_1.md
  - Experiments/Experiment_1/BLUEPRINT_1.md
  pillars:
    core:
    - CF S01
    - FM S12
    - MF S04
    - MF S12
    helpful:
    - CF S11
    - CF S12
    - FM S08
    - MF S02
    - MF S03
    - MF S07
    further: []
  module: B2 From Book to Verdict
```

<!-- course-map:end -->

</details>
