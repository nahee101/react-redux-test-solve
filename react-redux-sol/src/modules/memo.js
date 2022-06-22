/* 액션 타입 정하기 */
const CHANGE_TITLE = 'memo/CHANGE_TITLE';
const CHANGE_TEXT = 'memo/CHANGE_TEXT';
const INSERT = 'memo/INSERT';
const REMOVE = 'memo/REMOVE';

/* 액션 함수 작성 >> dispatch 사용을 위해 export 함 */
export const changeTitle = (input) => ({
    type: CHANGE_TITLE,
    input // action.input이라고 작성했을 때, 그 안의 내용 사용 가능
});

export const changeText = (input) => ({
    type: CHANGE_TEXT,
    input
});

let id = 3;
// insert 시에는 id 값이 필요함
export const Insert = (memo) => ({
    type: INSERT,
    memo: {
        id: id++,
        title: memo.title,
        text: memo.text
    }
});

export const Remove = (id) => ({
    type: REMOVE,
    id
});

/* 초기 state 값을 작성 */
const initialState = {
    title: '',
    text: '',
    memos: [
        {
            id: 1,
            title: 'first',
            text: 'first memo'
        },
        {
            id: 2,
            title: 'second',
            text: 'second memo'
        }
    ]
};

/* state 값을 변경하는 reducer 함수 작성 
  >> store에서 사용하기 위해 export default 함 */
function memo(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.input
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.input
            };
        case INSERT:
            return {
                ...state,
                memos: state.memos.concat(action.memo)
            };
        case REMOVE:
            return {
                ...state,
                memos: state.memos.filter((memo) => memo.id !== action.id)
            };
        default:
            return state;
    };
};

export default memo;