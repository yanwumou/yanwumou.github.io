import axios from 'axios';
export function getPicture(params: any) {
    return axios({
        url: 'https://api.muxiaoguo.cn/api/360bizhi',
        method: 'get',
        params: {
            api_key: 'c4488dc51ccbc750',
            cid: 6,
            start: params,
            count: 1,
        },
    }).then((res) => res.data.data[0]);
}
