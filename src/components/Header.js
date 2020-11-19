import React from "react";
import { Link } from "react-router-dom";
import { Nav, Badge } from "react-bootstrap";

export default function Header() {
  return (
    <Nav variant="tabs" defaultActiveKey="/current" className="bg-light">
      <Nav.Item>
        <Nav.Link eventKey="/orders" as="li">
          <Link to="/orders" className="font-weight-bold text-dark">
            Orders
            <Badge pill variant="secondary" className="ml-1">
              12
            </Badge>
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/current" as="li">
          <Link to="/current" className="font-weight-bold text-dark">
            Current
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
