import styled from "styled-components"
import { Link } from "react-router-dom";
import { BsFilterRight, BsSearch } from "react-icons/bs";

interface ActiveProps {
    isActive: boolean
}

interface ActiveRatingProps {
    isActiveRating: boolean
}

interface PrimeDealProps {
    primeDeal: boolean
}

export const Button = styled.button`
    background-color: #0b69ff;
    color: white;
    margin-top: 2px;
`;

export const Input = styled.input`
    background-color: #d7dfe9;
    padding: 10px;
    border: none;
    color: #64748b;
    margin-bottom: 2px;
    margin-top: 5px;
`;

export const WebsiteLogo = styled.img`
    width: 180px;
    height: 50px;
    margin: 20px;
`;

export const WebsiteLogoImg = styled(WebsiteLogo)`
    margin: 5px;
`

export const LoginFormContainer = styled.form`
    display: flex;
    flex-direction: column;
`;

export const LoginImg = styled.img`
    width: 600px;
    height: 300px;
`;

export const LoginSubmitForm = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 3px 3px 3px 3px #d7dfe9;
    padding: 10px;
    width: 300px;
    height: 420px;
    margin-left: 50px;
    align-items: center;
`;

export const LoginSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left:20px;
`;

export const LoginErr = styled.p`
    color: #ff0b37;
    display: hidden;
    font-size: 14px;
`;

export const LinkItemsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const LinkItem = styled.li`
    margin: 10px;
    list-style-type: none;
    color: black;
`;

export const LogoutButton = styled.button`
    background-color: #0b69ff;
    color: white;
    width: 100%;
    height: 40px;
    text-align: center;
    margin: 10px;
    margin-top: 15px;
`;

export const HeaderItems = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 700px;
`;

export const HeaderContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5px;
`;

export const CardCount = styled.span`
    color: #475569;
`;

export const LinkStyle = styled(Link)`
    color: #475569;
`;

export const Description = styled.p`
    color: black;
    font-size: 16px;
`;

export const ContentContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px;
`;

export const Heading = styled.h1`
    color:black;
`;


export const HomeContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const HomeImg = styled.img`
    width: 400px;
    height: 480px;
`;

export const NotFoundImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
`;

export const NotFoundImg = styled.img`
    width: 400px;
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 90%;
    max-width: 1110px;
`;

export const ProductsHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    flex-wrap: wrap;
`;

export const ProductsListHeading = styled.h1`
    color: #475569;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 500;
`;

export const SortByContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const SortByIcon = styled(BsFilterRight)`
    font-size: 24px;
    color: #475569;
    margin-right: 6px;
`;

export const SortByPara = styled.p`
    color: #475569;
    font-family: 'Roboto';
    font-size: 16px;
`;

export const SortBySelect = styled.select`
    color: #475569;
    background-color: #ffffff;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    border: none;
    padding: 12px;
    outline: none;
    cursor: pointer;
`;

export const SelectOption = styled.option`
    color: #7e858e;
    font-family: 'Roboto';
    font-size: 14px;
`;

export const NonPrimeProductItemContainer = styled.div<PrimeDealProps>`
    list-style-type: none;
    margin-bottom: 48px;
    width: ${(props) => props.primeDeal ? '300px' : '270px'};
    flex-grow: 0;
    flex-shrink: 1;
    margin-right: 20px;
`;

export const ThumnailImg = styled.img`
    width: 100%;
    max-height: 350px;
    border-radius: 6px;
`;

export const ProductTitle = styled.h1`
    color: #171f46;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 8px;
`;

export const ProductBrand = styled.p`
    color: #594d6d;
    font-family: 'Roboto';
    font-size: 18px;
    margin-bottom: 6px;
`;

export const ProductDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 2px;
`;

export const ProductPrice = styled.p`
    color: #171f46;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
    margin: 0px;
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #6d1d9c;
    border-radius: 6px;
    padding: 6px 16px;
`;

export const Rating = styled.p`
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    margin-right: 4px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const Star = styled.img`
    height: 20px;
    width: 20px;
    margin-bottom: 3px;
`;

export const ProductCardLinkItem = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
`;

export const PrimeDealsListHeading = styled.h1`
    color: #475569;
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 500;
    margin-top: 48px;
`;

export const PrimeDealsLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
`;

export const RegisterPrimeImg = styled.img`
    margin-top: 30px;
`;

export const PrimeDealsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

export const FiltersGroupContainer = styled.div`
    width: 25%;
    max-width: 280px;
    min-width: 240px;
    margin-top: 48px;
`;

export const ClearFilterButton = styled.button`
    background-color: #ffffff;
    color: #6d1d9c;
    font-family: 'Roboto';
    font-size: 10px;
    font-weight: 700;
    border-radius: 4px;
    border: 1px solid #6d1d9c;
    padding-top: 8px;
    padding-left: 12px;
    padding-bottom: 8px;
    padding-right: 12px;
    margin-top: 16px;
    outline: none;
    cursor: pointer;
`;

export const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #f1f5f9;
    border-radius: 8px;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 16px;
`;

export const SearchInput = styled.input`
     background-color: #f1f5f9;
    color: #0f172a;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    border: none;
    outline: none;
    flex-grow: 1;
`;

export const SearchIcon = styled(BsSearch)`
    color: #475569;
    width: 20px;
    height: 20px;
`;

export const FilterCategoryHeading = styled.h3`
    color: #12022f;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
    margin-top: 24px;
`;

export const FilterCategoryList = styled.ul`
    padding-left: 0;
`;

export const CategoryItem = styled.li`
    list-style-type: none;
    margin-top: 16px;
    cursor: pointer;
`;

export const CategoryName = styled.p<ActiveProps>`
    color:${(props) => props.isActive ? "#6d1d9c" : '#64748b'};
    font-family: 'Roboto';
    font-size: 16px;
`;

export const RatingHeading = styled.h1`
    color: #12022f;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
    margin-top: 32px;
    margin-bottom: 18px;
`;

export const RatingList = styled.ul`
    padding-left: 0px;
`;

export const RatingImg = styled.img`
    max-width: 152px;
    height: 20px;
`;

export const RatingItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    cursor: pointer;
`;

export const AddUp = styled.p<ActiveRatingProps>`
    color:${(props) => props.isActiveRating ? ' #6d1d9c;' : ' #64748b'};
    font-family: Roboto;
    font-size: 16px;
    margin-left: 10px;
    margin-bottom: 0;
    margin-top: 0;
`;

export const AllProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 100px;
`;

export const ProductsErrorViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    padding-bottom: 64px;
`;

export const ProductFailureImg = styled.img`
    width: 250px;
    height: 200px;
    align-self: center;
    justify-self: center;
`;

export const ProductFailureHeading = styled.h1`
    color: #171f46;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
`;

export const ProductFailureDescription = styled.p`
    text-align: center;
    color: #64748b;
    font-family: 'Roboto';
    font-size: 14px;
    width: 90%;
    max-width: 288px;
    line-height: 1.3;
`;

export const ProductLoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const NoProductsView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 64px;
    margin-top: 48px;
`;

export const NoProductsImg = styled.img`
    width: 250px;
    height: 180px;
`;

export const NoProductsHeading = styled.h1`
    color: #171f46;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3px;
`;

export const NoProductsDescription = styled.p`
    text-align: center;
    color: #64748b;
    font-family: 'Roboto';
    font-size: 14px;
    width: 90%;
    max-width: 288px;
    line-height: 1.3;
`;

export const AllProductsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
`;

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
`;

export const CartItemContainer = styled.li`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 16px;
    margin-bottom: 32px;
    box-shadow: 0px 4px 16px 0px #7e858e29;
    padding-left: 36px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-right: 48px;
    width: 100%;
    width: 1000px;
`;

export const CartProductImage = styled.img`
    width: 96px;
    height: 96px;
    border-radius: 4px;
`

export const CartItemDetailsContainer = styled.div`
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
`

export const CartProductTitleBrandContainer = styled.div`
    width: 250px;
`

export const CartProductTitle = styled.p`
    color: #171f46;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
`

export const CartProductBrand = styled.p`
    color: #64748b;
    font-family: 'Roboto';
    font-size: 12px;
`

export const CartQuantityContainer = styled.div`
    display: flex;
    align-items: center;
`

export const QuantityControllerButton = styled.button`
    padding: 0;
`

export const CartQuantity = styled.p`
    color: #52606d;
    font-family: 'Roboto';
    font-weight: 500;
    margin: 8px;
    line-height: 1.3;
    font-size: 18px;
    margin-left: 16px;
    margin-right: 16px;
`

export const TotalPriceDeleteContainer = styled.div`
    display: flex;
    align-items: center;
`

export const CartTotalPrice = styled.p`
    color: #0b69ff;
    font-family: 'Roboto';
    font-weight: 500;
    margin-left: 15px;
    min-width: 100px;
    font-size: 18px;
`

export const DeleteButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 32px;
`

export const CartList = styled.ul`
  padding-left: 0px;
`

export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const RemoveAllButton = styled.button`
  background-color: transparent;
  color: blue;
  font-size: 20px;
  border-style: none;
  cursor: pointer;

  &:hover,
  &:focus {
    border-style: none;
  }
`

export const OrderCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  text-align: center;
  padding: 0px;
`

export const ItemsCountPara = styled.p`
  color: #616e7c;
  font-size: 20px;
`

export const HeadingTotal = styled.h2`
  color: #616e7c;
  font-size: 24px;
`

export const AmountText = styled.span`
  color: black;
`

export const CheckoutButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 4px;
`

export const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

export const EmptyCartImg = styled.img`
    align-self: center;
    min-width: 40%;
    height: 270px;
    width: 60%;
    margin-left: 30px;
`

export const ShopNowButton = styled.button`
    background-color: #0b69ff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 4px;
`

export const SimilarProductItemContainer = styled.li`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 200px;
    margin-right: 64px;
`

export const SimilarProductImage = styled.img`
    width: 200px;
    border-radius: 8px;
`

export const SimilarProductTitle = styled.p`
    color: #171f46;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 6px;
`

export const SimilarProductBrand = styled.p`
    color: #594d6d;
    font-family: 'Roboto';
    font-size: 16px;
    margin-top: 6px;
`

export const SimilarProductPriceRatingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
`

export const SimilarProductPrice = styled.p`
    color: #171f46;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
`

export const SimilarProductRatingContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #6d1d9c;
    border-radius: 6px;
    padding: 4px 8px;
`

export const SimilarProductRating = styled.p`
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    margin: 0 4px 0 0;
`

export const SimilarProductStar = styled.img`
    height: 14px;
    width: 14px;
`

export const ProductItemDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`

export const ProductDetailsSuccessView = styled.div`
  width: 80%;
  max-width: 1110px;
`

export const ProductImage = styled.img`
  border-radius: 16px;
  flex-shrink: 0;
  width: 48%;
  max-width: 540px;
  max-height: 576px;
  margin: 3px;
`

export const Product = styled.div``

export const ProductName = styled.h1`
  color: #3e4c59;
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 16px;
`

export const PriceDetails = styled.p`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const RatingAndReviewsCount = styled.div`
  display: flex;
  align-items: center;
`

export const ReviewsCount = styled.p`
  color: #12022f;
  font-family: 'Open Sans';
  font-size: 14px;
  margin-left: 12px;
`

export const ProductDescription = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  margin-top: 16px;
  line-height: 1.3;
  font-size: 18px;
  margin-bottom: 24px;
`

export const LabelValueContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`

export const Label = styled.p`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`

export const Value = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 18px;
  margin: 0 0 0 8px;
`

export const HorizontalLine = styled.hr`
  border-top: 1px solid #cbced2;
  margin: 0;
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`

export const QuantityController = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color:black;
`

export const QuantityControllerIcon = styled.span`
  color: #616e7c;
  width: 16px;
  height: 16px;
`

export const Quantity = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 0 24px;
`

export const AddToCartButton = styled(Button)`
  margin-bottom: 48px;
//   color:black;
`

export const SimilarProductsHeading = styled.h1`
  color: #3e4c59;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  margin: 0;
`

export const SimilarProductsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0;
  margin-top: 24px;
`

export const ProductsDetailsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const ProductDetailsErrorViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const ErrorViewImage = styled.img`
  width: 540px;
  height: 290px;
`

export const ProductNotFoundHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: 500;
  margin-top: 48px;
`