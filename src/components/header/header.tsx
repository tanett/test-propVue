import { Separator } from '../ui/separator.tsx';
import DownloadFileButton from '../../feature/downloadFileButtom/downloadFileButton.tsx';


export function Header() {
    return (
        <div>
            <div className=" flex flex-row justify-between align-baseline h-min-[150px]">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-medium leading-none">Products</h1>
                    <p className="text-sm text-muted-foreground">
                        by Shadrina Tatiana.
                    </p>
                </div>

                <div className="flex flex-row">
                    <Separator orientation="vertical"/>

                    <DownloadFileButton/>
                </div>

            </div>
            <Separator className="my-4"/>

        </div>
    )
}

