import {ErrorTypes, RejectedFile, SvgFile} from '../interfaces';

export const loadTestSvgFiles = async () => {
    const testSpriteFiles = await fetchTestFiles();
    return generateTestSvgFileArr(testSpriteFiles);
};

const fetchTestFiles = async () => {

    const urlTestSprite = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/sprites/regular.svg";
    const urlTestSvg = "https://s.cdpn.io/3/kiwi1.svg";

    const loadedFiles: string[] = [];
    const rejectedFiles: RejectedFile[] = [];

    await fetchTestFile(urlTestSprite);
    await fetchTestFile(urlTestSvg);

    return {
        loadedFiles,
        rejectedFiles
    };

    function fetchTestFile(url: string): Promise<number> {
        return fetch(url)
            .then(res => res.text())
            .then(data => loadedFiles.push(data))
            .catch(er => rejectedFiles.push(new RejectedFile(url, ErrorTypes.load)))
    }
};

function generateTestSvgFileArr({loadedFiles, rejectedFiles} : ({loadedFiles: string[], rejectedFiles: RejectedFile[]})) {
    const generatedTestFile = loadedFiles.map((file, id) => {
        const title = `test-file #${1 + id}`;
        return new SvgFile(
            file,
            title,
            id,
            title,
            new Date().getDate(),
        )
    });

    return {
        loadedFiles: generatedTestFile,
        rejectedFiles
    }
}

/*
function generateTestSvgFileArr(filesArr: (string | RejectedFile)[]): (SvgFile | RejectedFile)[] {
    return filesArr.map((file, id) => {
        if (typeof file !== 'string') {
            return {errorType: 'load', fileName: 'ufsdf'}
        }

        const title = `test-file #${1 + id}`;
        return new SvgFile(
            file,
            title,
            id,
            title,
            new Date().getDate(),
        )
    });
}*/
