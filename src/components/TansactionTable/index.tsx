import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>

            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$: 12.000,00</td>
                        <td>Desenvolvimento web</td>
                        <td>27/07/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$: 1.200,00</td>
                        <td>Casa</td>
                        <td>24/07/2022</td>
                    </tr>
                </tbody>
            </table>

        </Container>
    )
}