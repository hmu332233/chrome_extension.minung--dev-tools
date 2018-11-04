export default {
  "propTypeArray": {
    "prefix": "pta",
    "body": "PropTypes.array,",
    "description": "Array prop type"
  },
  "propTypeArrayRequired": {
    "prefix": "ptar",
    "body": "PropTypes.array.isRequired,",
    "description": "Array prop type required"
  },
  "propTypeBool": {
    "prefix": "ptb",
    "body": "PropTypes.bool,",
    "description": "Bool prop type"
  },
  "propTypeBoolRequired": {
    "prefix": "ptbr",
    "body": "PropTypes.bool.isRequired,",
    "description": "Bool prop type required"
  },
  "propTypeFunc": {
    "prefix": "ptf",
    "body": "PropTypes.func,",
    "description": "Func prop type"
  },
  "propTypeFuncRequired": {
    "prefix": "ptfr",
    "body": "PropTypes.func.isRequired,",
    "description": "Func prop type required"
  },
  "propTypeNumber": {
    "prefix": "ptn",
    "body": "PropTypes.number,",
    "description": "Number prop type"
  },
  "propTypeNumberRequired": {
    "prefix": "ptnr",
    "body": "PropTypes.number.isRequired,",
    "description": "Number prop type required"
  },
  "propTypeObject": {
    "prefix": "pto",
    "body": "PropTypes.object,",
    "description": "Object prop type"
  },
  "propTypeObjectRequired": {
    "prefix": "ptor",
    "body": "PropTypes.object.isRequired,",
    "description": "Object prop type required"
  },
  "propTypeString": {
    "prefix": "pts",
    "body": "PropTypes.string,",
    "description": "String prop type"
  },
  "propTypeStringRequired": {
    "prefix": "ptsr",
    "body": "PropTypes.string.isRequired,",
    "description": "String prop type required"
  },
  "propTypeNode": {
    "prefix": "ptnd",
    "body": "PropTypes.node,",
    "description": "Anything that can be rendered: numbers, strings, elements or an array"
  },
  "propTypeNodeRequired": {
    "prefix": "ptndr",
    "body": "PropTypes.node.isRequired,",
    "description": "Anything that can be rendered: numbers, strings, elements or an array required"
  },
  "propTypeElement": {
    "prefix": "ptel",
    "body": "PropTypes.element,",
    "description": "React element prop type"
  },
  "propTypeElementRequired": {
    "prefix": "ptelr",
    "body": "PropTypes.element.isRequired,",
    "description": "React element prop type required"
  },
  "propTypeInstanceOf": {
    "prefix": "pti",
    "body": "PropTypes.instanceOf($0),",
    "description": "Is an instance of a class prop type"
  },
  "propTypeInstanceOfRequired": {
    "prefix": "ptir",
    "body": "PropTypes.instanceOf($0).isRequired,",
    "description": "Is an instance of a class prop type required"
  },
  "propTypeEnum": {
    "prefix": "pte",
    "body": "PropTypes.oneOf(['$0']),",
    "description": "Prop type limited to specific values by treating it as an enum"
  },
  "propTypeEnumRequired": {
    "prefix": "pter",
    "body": "PropTypes.oneOf(['$0']).isRequired,",
    "description": "Prop type limited to specific values by treating it as an enum required"
  },
  "propTypeOneOfType": {
    "prefix": "ptet",
    "body": "PropTypes.oneOfType([\n\t$0\n]),",
    "description": "An object that could be one of many types"
  },
  "propTypeOneOfTypeRequired": {
    "prefix": "ptetr",
    "body": "PropTypes.oneOfType([\n\t$0\n]).isRequired,",
    "description": "An object that could be one of many types required"
  },
  "propTypeArrayOf": {
    "prefix": "ptao",
    "body": "PropTypes.arrayOf($0),",
    "description": "An array of a certain type"
  },
  "propTypeArrayOfRequired": {
    "prefix": "ptaor",
    "body": "PropTypes.arrayOf($0).isRequired,",
    "description": "An array of a certain type required"
  },
  "propTypeObjectOf": {
    "prefix": "ptoo",
    "body": "PropTypes.objectOf($0),",
    "description": "An object with property values of a certain type"
  },
  "propTypeObjectOfRequired": {
    "prefix": "ptoor",
    "body": "PropTypes.objectOf($0).isRequired,",
    "description": "An object with property values of a certain type required"
  },
  "propTypeObjectOfShape": {
    "prefix": "ptoos",
    "body": "PropTypes.objectOf(PropTypes.shape($0)),",
    "description": "An object whose keys are known ahead of time"
  },
  "propTypeObjectOfShapeRequired": {
    "prefix": "ptoosr",
    "body": "PropTypes.objectOf(PropTypes.shape($0)).isRequired,",
    "description": "An object whose keys are known ahead of time required"
  },
  "propTypeShape": {
    "prefix": "ptsh",
    "body": "PropTypes.shape({\n\t$0\n}),",
    "description": "An object taking on a particular shape"
  },
  "propTypeShapeRequired": {
    "prefix": "ptshr",
    "body": "PropTypes.shape({\n\t$0\n}).isRequired,",
    "description": "An object taking on a particular shape required"
  },
  "componentDidMount": {
    "prefix": "cdm",
    "body": "componentDidMount() {\n\t$0\n}\n",
    "description": "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs."
  },

  "componentWillReceiveProps": {
    "prefix": "cwr",
    "body": "componentWillReceiveProps(nextProps) {\n\t$0\n}\n",
    "description": "Invoked when a component is receiving new props. This method is not called for the initial render. [DEPRECATION NOTE]: This method is deprecated in React 16.3"
  },

  "shouldComponentUpdate": {
    "prefix": "scu",
    "body": "shouldComponentUpdate(nextProps, nextState) {\n\t$0\n}\n",
    "description": "Invoked before rendering when new props or state are being received. "
  },

  "componentWillUpdate": {
    "prefix": "cwup",
    "body": "componentWillUpdate(nextProps, nextState) {\n\t$0\n}\n",
    "description": "Invoked immediately before rendering when new props or state are being received. [DEPRECATION NOTE]: This method is deprecated in React 16.3"
  },

  "componentDidUpdate": {
    "prefix": "cdup",
    "body": "componentDidUpdate(prevProps, prevState) {\n\t$0\n}\n",
    "description": "Invoked immediately after the component's updates are flushed to the DOM."
  },

  "componentWillUnmount": {
    "prefix": "cwun",
    "body": "componentWillUnmount() {\n\t$0\n}\n",
    "description": "Invoked immediately before a component is unmounted from the DOM."
  }
}