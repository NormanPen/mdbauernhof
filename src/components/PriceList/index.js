export const PriceList = () => {
  return (
    <div className="pt-24 md:w-160 m-0 m-auto px-9">
      <div className="text-center ">
        <h1 className="text-3xl mb-20 font-Atma">Preisliste</h1>
        <h2 className="text-xl mb-4 font-bold">Kindergeburtstage</h2>
        <p className="mb-8">
          Hier finden Sie unsere gängigen Angebote für einen Kindergeburtag.
          Individuelle Anpassungen auf Ihre Wünsche sind in der Regel kein
          Problem.
        </p>
      </div>

      <div className="m-0 m-auto max-w-screen-lg flex justify-center pb-8">
        <div className="pr-16">
          <p>10 Kinder für 3 Stunden</p>
          <p>10 Kinder für 4 Stunden</p>
          <p>Jedes weitere Kind</p>
          <p>Jede weitere 1/2 Stunde</p>
          <p>
            Selbstgemachte Pizza auf dem <br />
            Blech für alle, Belag nach Wunsch
          </p>
        </div>
        <div className="">
          <p>140€</p>
          <p>160€</p>
          <p>15€</p>
          <p>15€</p>
          <p>50€</p>
        </div>
      </div>
      <div className="text-center font-bold pb-4">
        <p className="mb-16">
          Im Preis enthalten sind: Eine Hofführung, ausgiebiges Programm mit den
          Tieren (Eselreiten, füttern, streicheln etc.), viele interessante
          Infos und Lernen zum Thema Hof, Tier und Natur. Heustalltoben, Nutzung
          des Geburtstagsraums mit Küche, Bad, und großem Raum fürs gemeinsame
          Essen und Geschenke auspacken. Wasser und Apfelschorle stellen wir,
          außerdem Kaffee für die Erwachsenen. Je nach Saison und Zeit außerdem:
          Bauerngarten ernten, Schnitzeljagd, Bachwanderung. In jedem Fall: Ein
          unvergesslicher Tag mit vielen tollen Erinnerungn und Natur pur;)
        </p>
        <h2 className="text-xl mb-4 font-bold">Hofeintritt</h2>
        <p className="mb-4">
          Wenn Sie nicht im Rahmen eines Kindergeburtstages oder anderen
          gebuchten Veranstaltung bei uns sind, sondern z.B. mit ihrer Familie
          vorbeikommen möchten, nehmen wir einen Hofeintritt. Der Hofbesuch ist
          nur mit einer Voranmeldung möglich.
        </p>
      </div>

      <div className="m-0 m-auto max-w-screen-lg flex justify-center pb-16">
        <div className="pr-16">
          <p>
            Hofeintritt mit Führung pro Person
            <br />
            (wenn es Ihr erster Besuch ist)
          </p>
          <p>
            Einzeleintritt pro Person
            <br />
            (nur möglich wenn Sie schon <br /> einmal bei uns waren)
          </p>
        </div>
        <div>
          <p>15€</p>
          <br />
          <p>5€</p>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-xl mb-4 font-bold">Kreativworkshop</h2>
        <p>
          Preise für einen Kreativworkshop wie Holzflöße basteln, oder z.B.
          Fosterhocker oder Teelicht-Häuschen töpfern können individuell
          vereinbart werden.
        </p>
      </div>
    </div>
  );
};
