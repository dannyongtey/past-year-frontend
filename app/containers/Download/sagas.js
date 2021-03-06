import { call, put, takeLatest } from 'redux-saga/effects'
import { SET_DOWNLOAD_DATA, SET_DOWNLOAD_ID, CLEAR_DOWNLOAD_DATA } from 'containers/App/constants'
import { showSnack } from 'react-redux-snackbar';
import fileDownload from 'js-file-download'
import request from 'utils/request'

const SHARED_ID_URL = '/download/shared'

export default function* downloadSaga() {
    yield takeLatest(SET_DOWNLOAD_DATA, fetchData)
}

export function* fetchData({ data }) {
    let { details } = data
    const { type, uuid: id } = details
    details = details.details
    let downloadURL
    let method
    let postBody = {}
    let options = {}
    switch (type) {
        case 'single':
            if (details.length === 1) {
                downloadURL = `/download/${details[0]}`
                method = 'get'
                options = {
                    responseType: 'blob',
                }
            } else {
                downloadURL = '/download/single'
                method = 'post'
                postBody = {
                    ids: details,
                    id,
                }
                options = {
                    responseType: 'blob'
                }
            }
            break
        case 'multiple':
            downloadURL = '/download/multiple'
            postBody = {
                subjects: details,
                id,
            }
            options = {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            method = 'post'
            break
        case 'shareID':
            downloadURL = `${SHARED_ID_URL}`
            postBody = {
                id: details,
                type: 'shared',
            }
            options = {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            method = 'post'
            break

    }

    try {
        const response = yield call(request, { type: method, url: downloadURL, postBody, options })
        if (type !== 'shareID'){
            yield put({ type: SET_DOWNLOAD_ID, data: id })
        }
        if (response.headers) {
            if (response.headers['content-type']) {
                const contentType = response.headers['content-type']
                if (contentType === 'application/zip') {
                    try {
                        console.log(response)
                        fileDownload(response.data, 'files.zip')
                    } catch (err) {
                        console.log(err)
                    }
                } else if (contentType === 'application/pdf') {
                    fileDownload(response.data, `${details[0]}.pdf`)
                } else { // Normal download
                    // const { id } = response.data
                    yield put(showSnack('await ID', {
                        label: 'Server is currently processing your request.',
                        timeout: 5000,
                    }))
                    pingForDownload(id)
                }
            }
        }
    } catch (err) {
        yield put(showSnack('error', {
            label: err.response.data.error || 'An unknown error occurred. Did you enter all details correctly?',
            timeout: 5000,
            button: { label: 'OK' }
        }))
        yield put({ type: CLEAR_DOWNLOAD_DATA  })
    }
    // const data = yield request('post')
}

async function pingForDownload(id) {
    const downloadURL = `${SHARED_ID_URL}${id}`
    const pingInterval = 5000
    let interval
    interval = setInterval(async () => {
        try {
            const response = await request({
                type: 'get',
                url: downloadURL,
                options: {
                    responseType: 'blob'
                }
            })
            const contentType = response.headers['content-type']
            if (contentType === 'application/zip') {
                fileDownload(response.data, 'past-years.zip')
            }
            clearInterval(interval)
        } catch (err) {
            console.log(err)
        }
    }, pingInterval)


}
