import { Container } from "./styles";

import { Summary } from "../Summary";
import { TransactionsTable } from "../TansactionTable";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}