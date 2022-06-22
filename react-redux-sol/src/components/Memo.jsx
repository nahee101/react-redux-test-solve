const MemoItem = ({memo, onRemove}) => {
    return (
        <div>
            {/* memo.title */}
            <span><strong>제목: {memo.title}</strong></span>
            {/* memo 삭제: memo의 id 값을 통해서 삭제 */}
            <button onClick={() => {onRemove(memo.id)}}>X</button>
            {/* memo.text */}
            <p>내용: {memo.text}</p>
        </div>
    );
};

const Memo = ({ title, text, memos, onChangeTitle, onChangeText, onInsert, onRemove }) => {
    const memoAdd = () => {
        onInsert({title: title, text: text});
        onChangeTitle('');
        onChangeText('');
    };

    return (
        <div>
            <h1>메모하는 공간입니다</h1>
            {/* title 값을 가져옴: 입력 누르면 초기화 */}
            <input 
            value={title}
            onChange={(e) => {onChangeTitle(e.target.value)} }
            type="text" /> <br />
            {/* text 값을 가져옴: 입력 누르면 초기화 */}
            <textarea
            value={text}
            onChange={(e) => {onChangeText(e.target.value)} }
            cols="24" rows="10"/> <br />
            {/* title과 text 값을 전달 */}
            <button
            onClick={memoAdd}>입력</button>
            <hr />
            {/* memos를 가져와 map을 통해 전체를 보여준다 */}
            {
                memos.map((memo) => (
                    <MemoItem memo={memo} onRemove={onRemove} key={memo.id} />
                ))
            }
        </div>
    );
};

export default Memo;