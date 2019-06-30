import { call, put, takeLatest } from 'redux-saga/effects'
import { SET_DOWNLOAD_DATA } from 'containers/App/constants'
import { showSnack } from 'react-redux-snackbar';
import fileDownload from 'js-file-download'
import request from 'utils/request'

export default function* downloadSaga() {
    yield takeLatest(SET_DOWNLOAD_DATA, fetchData)
}

export function* fetchData({ data }) {
    let { details } = data
    const { type } = details
    details = details.details
    let downloadURL
    let method
    let postBody = {}
    switch (type) {
        case 'single':
            if (details.length === 1) {
                downloadURL = `/download/single/${details[0]}`
                method = 'get'
                postBody = {
                    responseType: 'blob',
                }
            } else {
                downloadURL = '/download/single'
                method = 'post'
                postBody = {
                    ids: details
                }
            }
            break
        case 'multiple':
            downloadURL = '/download/multiple'
            postBody = {
                subjects: details,
            }
            method = 'post'
            break
        case 'shareID':
            downloadURL = `/download/multiple/${details}`
            postBody = {
                responseType: 'blob',
            }
            method = 'get'
            break

    }

    try {
        const response = yield call(request, { type: method, url: downloadURL, options: postBody })
        if (response.headers) {
            if (response.headers['content-type']) {
                const contentType = response.headers['content-type']
                if (contentType === 'application/zip') {
                    fileDownload(response.data, 'past-years.zip')
                } else if (contentType === 'application/pdf') {
                    fileDownload(response.data, `${details[0]}.pdf`)
                }
            }
        }
    } catch (err) {
        yield put(showSnack('error', {
            label: err.response.data.error,
            timeout: 5000,
            button: { label: 'OK' }
        }))
    }
    // const data = yield request('post')
}
