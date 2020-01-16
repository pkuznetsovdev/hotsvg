import actionTypes from './actionTypes';

import {Action, ErrorTypes, SvgFile, SvgIcon, SvgSprite} from '../interfaces';
import {generateSvgFileArr, getContentData} from '../services/sprite-service';
import {loadTestSvgFiles} from '../services/test-sprite-service';

import filterNewFilesOnUpload from '../utils/filter-uploaded-files';
import RejectedFile from "../interfaces/errorTypes";

/*  Generate Sprites  */
const generateSpriteFilesStarted = (): Action => ({type: actionTypes.updateSpriteFilesStart});

const generateSpriteFilesSuccess = (payload: (SvgIcon | SvgSprite)[]): Action => ({
    type: actionTypes.updateSpriteFilesSuccess,
    payload,
});

const generateSpriteFilesFail = (error: string): Action => ({
    type: actionTypes.updateSpriteFilesFail,
    payload: error,
});

const rejectedFilesSuccess = (payload: RejectedFile[]): Action => ({
    type: actionTypes.updateRejectedFiles,
    payload,
});

/*  Delete Uploaded Data  */
const deleteUploadedData = (): Action => ({
    type: actionTypes.deleteUploadedData,
});

const loadTestData = (dispatch: any) => () => {
    dispatch(generateSpriteFilesStarted());
    loadTestSvgFiles()
        .then(testFiles => {
            const parsedFiles: (SvgIcon | SvgSprite)[] = [];
            testFiles.loadedFiles.forEach(testFile => {
                const parsedFile = getContentData(testFile);
                if (!parsedFile) {
                    testFiles.rejectedFiles.push(new RejectedFile(testFile.title, ErrorTypes.parse))
                } else {
                    parsedFiles.push(parsedFile)
                }
            });

            dispatch(generateSpriteFilesSuccess(parsedFiles));

            if (testFiles.rejectedFiles.length) {
                dispatch(rejectedFilesSuccess(testFiles.rejectedFiles));
            }
        })
        .catch(er => alert(er));
};

const loadData = (dispatch: any) => (newFiles: File[]) => {
    dispatch(generateSpriteFilesStarted());
    generateSvgFileArr(newFiles)
        .then(svgFiles => {
            const newSvgFiles = filterNewFilesOnUpload(svgFiles);

            /*  On upload duplicated files...popup with list of duplicated files coming */
            if (!newSvgFiles.length) throw Error('All files were uploaded earlier(No duplicated files, please ;))');
            if (newSvgFiles.length < svgFiles.length) console.log('Some files were uploaded earlier(No duplicated files, please) ;)');

            const parsedFiles: (SvgIcon | SvgSprite)[] = [];
            newSvgFiles.forEach(svgFile => {
                const parsedFile = getContentData(svgFile);

                /*  On upload non-valid files...popup with list of non-valid files coming */
                if (!parsedFile) throw Error('Unable to parse the file');
                parsedFiles.push(parsedFile);
            });

            dispatch(generateSpriteFilesSuccess(parsedFiles));

        })
        .catch(error => dispatch(generateSpriteFilesFail(error)));
};

export {
    loadData,
    loadTestData,
    deleteUploadedData,
};