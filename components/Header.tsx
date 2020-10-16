const Header = () => (
  <div className="flex justify-around w-full bg-black bg-opacity-75 items-center top-0 fixed">
    {/* <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    > */}
    <a href="/">
      <img className="w-16 py-1" src="/vdvlogo-cropped.png" />
    </a>
    {/* <Text
            sx={{
              fontFamily: 'body',
              fontSize: 4,
            }}
          >
            <Link
              sx={{
                color: 'white',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
              href='/'
            >
              <Text
                as='span'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Virtual Dojo
              </Text>{' '}
              <Text
                as='span'
                sx={{
                  color: 'primary',
                }}
              >
                |
              </Text>{' '}
              Vienna
            </Link>
          </Text> */}
    <div className="flex text-white justify-around align-middle text-lg ">
      <a className="px-4" href="/">
        Home
      </a>

      <a className="px-4" href="/AboutUs">
        About Us
      </a>

      <a className="px-4" href="/memberships">
        Memberships
      </a>

      {/* <NavLink href="/hello/">hello</NavLink> */}

      {/* <NavLink href="/forgot-password/">forgot password</NavLink> */}

      {/* <NavLink href="/login/">Login</NavLink> */}

      {/* hide 'logout' when not logged in */}
      {/* MeComponent */}
      {/* <NavLink href='/logout/'>logout</NavLink> */}

      {/* <NavLink href='/prices'>Prices</NavLink> */}
      {/* fused with Memberships!! */}
    </div>
    {/* </Flex> */}
  </div>
);
export default Header;
