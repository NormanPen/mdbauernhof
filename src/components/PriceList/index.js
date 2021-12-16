/*const PriceData = {
  heading: "Preisliste",
  heading2: "Kindergeburtstage",
  text1:
    "Hier finden Sie unsere gängigen Angebote für einen Kindergeburtag. Individuelle Anpassungen auf Ihre Wünsche sind in der Regel kein Problem.",
  price: ["asddas", "140€"],
};
*/
export const PriceList = () => {
  return (
    <div>
      <div className="text-center">
        <h1>Preisliste</h1>
        <h2>Kindergeburtstage</h2>
        <p>
          Hier finden Sie unsere gängigen Angebote für einen Kindergeburtag.
          Individuelle Anpassungen auf Ihre Wünsche sind in der Regel kein
          Problem.
        </p>

        <table>
          <tr>
            <td>10 Kinder für 3 Stunden</td>
            <td> 140€</td>
          </tr>
          <tr>
            <td>10 Kinder für 4 Stunden</td>
            <td>160€</td>
          </tr>
          <tr>
            <td>Jedes weitere Kind</td>
            <td>15 €</td>
          </tr>
          <tr>
            <td>Jede weitere 1/2 Stunde</td>
            <td>15 €</td>
          </tr>
          <tr>
            <td>
              selbstgemachte Pizza auf dem Blech für alle, Belag nach Wunsch
            </td>
            <td>50€</td>
          </tr>
        </table>
        <p>
          Im Preis enthalten sind: Eine Hofführung, ausgiebiges Programm mit den
          Tieren (Eselreiten, füttern, streicheln etc.), viele interessante
          Infos und Lernen zum Thema Hof, Tier und Natur. Heustalltoben, Nutzung
          des Geburtstagsraums mit Küche, Bad, und großem Raum fürs gemeinsame
          Essen und Geschenke auspacken. Wasser und Apfelschorle stellen wir,
          außerdem Kaffee für die Erwachsenen. Je nach Saison und Zeit außerdem:
          Bauerngarten ernten, Schnitzeljagd, Bachwanderung. In jedem Fall: Ein
          unvergesslicher Tag mit vielen tollen Erinnerungn und Natur pur;)
        </p>
        <h2>Hofeintritt</h2>
        <p>
          Wenn Sie nicht im Rahmen eines Kindergeburtstages oder anderen
          gebuchten Veranstaltung bei uns sind, sondern z.B. mit ihrer Familie
          vorbeikommen möchten, nehmen wir einen Hofeintritt. Der Hofbesuch ist
          nur mit einer Voranmeldung möglich.
        </p>
        <table>
          <tr>
            <td>
              Hofeintritt mit Führung pro Person (wenn es Ihr erster Besuch ist)
            </td>
            <td>15€</td>
          </tr>
          <tr>
            <td>
              Einzeleintritt pro Person (nur möglich wenn Sie schon einmal bei
              uns waren)
            </td>
            <td>5€</td>
          </tr>
        </table>
        <h2>Kreativworkshop</h2>
        <p>
          Preise für einen Kreativworkshop wie Holzflöße basteln, oder z.B.
          Fosterhocker oder Teelicht-Häuschen töpfern können individuell
          vereinbart werden.
        </p>
      </div>
    </div>
  );
};
