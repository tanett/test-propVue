import React, { useEffect } from 'react';
import * as XLSX from 'xlsx';
import { Label } from '../../components/ui/label.tsx';
import { Input } from '../../components/ui/input.tsx';
import { useAppDispatch } from '../../store/hooks.ts';
import { setDataXlsx } from '../../entety-project/dataFromXlsx/dataFromXlsxSlice.ts';
import { parseDataFromCsvHelper } from './parseDataFromCsvHelper.ts';

const  xlsx= "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
const  csv= "text/csv";

function DownloadFileButton() {

    const [data, setData] = React.useState<any>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(data){

            dispatch(setDataXlsx(data));
        }
    }, [data]);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files ) return;
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.onload = async (event) => {
            const workbook = XLSX.read(event.target!.result, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const sheetData = XLSX.utils.sheet_to_json(sheet);
            console.log('file.type', file.type);
            if(file.type === csv){
                setData(parseDataFromCsvHelper(sheetData as  Record<string, unknown>[]));
            } else {  setData(sheetData);}


        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div>
            <Label htmlFor="file"
                   className={ 'border rounded-lg bg-blue-900 text-white text-sm uppercase px-6 py-2 ml-6'}
            >Download file</Label>
            <Input
                className={'hidden '}
                type={'file'} id={'file'}
                accept={ [ xlsx, csv ].join(',') }
                onChange={handleFileUpload}
            />
            {/*<input type="file"  />*/}
            {/*{data && (*/}
            {/*    <div>*/}
            {/*        <h2>Imported Data:</h2>*/}
            {/*        <pre>{JSON.stringify(data, null, 2)}</pre>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}

export default DownloadFileButton;
