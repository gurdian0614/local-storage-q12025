const Campo = ({id, iconName, inputType, placeHolder, onChange, value}) => {
    return (
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className={iconName} />
        </span>
        <input
          className="form-control"
          type={inputType}
          id={id}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
        />
      </div>
    );
}

export default Campo