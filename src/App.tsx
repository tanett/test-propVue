import './App.css'
import { Header } from './components/header/header.tsx';
import { DataTable } from './feature/table/table.tsx';
import { ChartProductsByStatuses } from './feature/chart/chart.tsx';

function App() {


    return (
        <div className={'h-screen flex flex-col w-full'}>
            <Header/>
            <div className={'flex flex-row gap-4 w-full'}>
                <DataTable/>
                <ChartProductsByStatuses/>
            </div>

        </div>
    )
}

export default App
