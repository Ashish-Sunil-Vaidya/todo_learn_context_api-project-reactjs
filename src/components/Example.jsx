import PropTypes from "prop-types";

function Example(props) {
  return (
    <li className="example">
      <h5 className="example--name">{props.children}</h5>
      {props.demo_link && (
        <a className="example--src_link" href={props.demo_link}>
          Demo,
        </a>
      )}
      
      <a className="example--src_link" href={props.src_link}>
        Source
      </a>
    </li>
  );
}

Example.propTypes = {
  children: PropTypes.node.isRequired,
  src_link: PropTypes.string.isRequired,
  demo_link: PropTypes.string,
};

export default Example;
