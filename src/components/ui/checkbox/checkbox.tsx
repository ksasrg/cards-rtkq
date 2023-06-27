import s from './checkbox.module.scss'

export const Checkbox = () => (
  <form>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type="checkbox" id="c1" className={s.CheckboxRoot} />
      <label className={s.Label} htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  </form>
)
